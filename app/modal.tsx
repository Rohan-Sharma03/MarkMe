import React, { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ToastAndroid,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Text, View } from "../components/Themed";

interface Course {
  instructor_id: string;
  course_id: string;
  course_for: string;
}

export default function ModalScreen() {
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  const [acceptedCourses, setAcceptedCourses] = useState<string[]>([]);
  const [rejectedCourses, setRejectedCourses] = useState<string[]>([]);

  useEffect(() => {
    enrollmentRequest();
    loadAcceptedCoursesFromStorage();
    loadRejectedCoursesFromStorage();
  }, []);

  async function loadAcceptedCoursesFromStorage() {
    try {
      const acceptedCourseIds = await AsyncStorage.getItem("acceptedCourses");
      if (acceptedCourseIds !== null) {
        setAcceptedCourses(JSON.parse(acceptedCourseIds));
      }
    } catch (error) {
      console.error("Error loading accepted courses:", error);
    }
  }

  async function loadRejectedCoursesFromStorage() {
    try {
      const rejectedCourseIds = await AsyncStorage.getItem("rejectedCourses");
      if (rejectedCourseIds !== null) {
        setRejectedCourses(JSON.parse(rejectedCourseIds));
      }
    } catch (error) {
      console.error("Error loading rejected courses:", error);
    }
  }

  function showToast(message: string) {
    ToastAndroid.show(message, ToastAndroid.LONG);
  }

  const enrollmentRequest = async () => {
    try {
      const res = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/api/csGetEnroll`,
        {
          student_id: "2020BTechCSE066",
          branch: "BTechCSE",
          year: 2020,
        }
      );
      if (res.data.success) {
        setEnrolledCourses(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const acceptRequest = async (courseId: string) => {
    try {
      const res = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/api/csAcceptEnrollment`,
        {
          student_id: "2020BTechCSE066",
          course_id: courseId,
        }
      );
      showToast(res.data.message);
      if (res.data.success) {
        setAcceptedCourses([...acceptedCourses, courseId]);
        await AsyncStorage.setItem(
          "acceptedCourses",
          JSON.stringify([...acceptedCourses, courseId])
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const rejectRequest = async (courseId: string) => {
    // Add logic to handle rejecting the course
    try {
      const res = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/api/csRejectEnrollment`,
        {
          student_id: "2020BTechCSE066",
          course_id: courseId,
        }
      );
      showToast(res.data.message);
      if (res.data.success) {
        setRejectedCourses([...rejectedCourses, courseId]);
        await AsyncStorage.setItem(
          "rejectedCourses",
          JSON.stringify([...rejectedCourses, courseId])
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderCourseItem = ({ item }: { item: Course }) => {
    const isAccepted = acceptedCourses.includes(item.course_id);
    const isRejected = rejectedCourses.includes(item.course_id);

    return (
      <TouchableOpacity style={styles.courseContainer}>
        {isAccepted && (
          <Text style={styles.acceptedCourse}>{item.course_id} - Accepted</Text>
        )}
        {isRejected && (
          <Text style={styles.rejectedCourse}>{item.course_id} - Rejected</Text>
        )}
        {!isAccepted && !isRejected && (
          <View>
            <Text style={styles.courseTitle}>{item.course_id}</Text>
            <Text>{`Instructor: ${item.instructor_id}`}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#2ecc71" }]}
                onPress={() => acceptRequest(item.course_id)}
              >
                <Text style={styles.buttonText}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#e74c3c" }]}
                onPress={() => rejectRequest(item.course_id)}
              >
                <Text style={styles.buttonText}>Reject</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={enrolledCourses}
        renderItem={renderCourseItem}
        keyExtractor={(item, index) => `${item.course_id}_${index}`}
      />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  courseContainer: {
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  acceptedCourse: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  rejectedCourse: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
});
