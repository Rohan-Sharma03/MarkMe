import React, { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ToastAndroid,
} from "react-native";
import axios from "axios";
import { Text, View } from "../components/Themed";

interface Course {
  instructor_id: string;
  course_id: string;
  course_for: string;
}

export default function ModalScreen() {
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);

  useEffect(() => {
    enrollmentRequest();
  }, []);
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

  // Use object instead of array for accepted courses
  const [acceptedCourses, setAcceptedCourses] = useState<
    Record<string, boolean>
  >({});

  const handleAccept = (courseId: string) => {
    console.log(`Accepted course with ID: ${courseId}`);
    acceptRequest(courseId);

    // Update acceptedCourses for the specific course ID
    setAcceptedCourses((prevState) => ({
      ...prevState,
      [courseId]: true,
    }));
  };

  const handleReject = (courseId: string) => {
    console.log(`Rejected course with ID: ${courseId}`);
    // Add logic to handle rejecting the course
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
      console.log(res.data);
      showToast(res.data.message);
      if (res.data.success) {
        console.log(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderCourseItem = ({ item }: { item: Course }) => {
    const isAccepted = acceptedCourses[item.course_id]; // Check if the course is accepted

    return (
      <TouchableOpacity style={styles.courseContainer}>
        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>{item.course_id}</Text>
          <Text>{`Instructor: ${item.instructor_id}`}</Text>
        </View>
        {!isAccepted && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#2ecc71" }]}
              onPress={() => handleAccept(item.course_id)}
            >
              <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#e74c3c" }]}
              onPress={() => handleReject(item.course_id)}
            >
              <Text style={styles.buttonText}>Reject</Text>
            </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  courseContainer: {
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  courseInfo: {
    marginBottom: 10,
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
});
