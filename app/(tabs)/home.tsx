import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Pressable,
  StyleSheet,
} from "react-native";
import CourseBox from "../../components/CourseBox";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useAuth } from "../../context/authContext";

interface Course {
  course_id: string;
  course_name: string;
  course_objective: string;
  instructor_id: string;
  timetable_id: string;
  course_semester: number; // This field might need to be added to the Course interface
}

export default function Home() {
  const [data, setData] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useLocalSearchParams();
  const { student_id } = params;

  console.log("the course", data);
  const getData = async () => {
    try {
      const res = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/api/getStudentSpecificCourse`,
        {
          student_id: "2020BTechCSE066", // Use the student_id received from params
        }
      );
      setData(res.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.post(
          `${process.env.EXPO_PUBLIC_API_URL}/api/getStudentSpecificCourse`,
          {
            student_id: "2020BTechCSE066", // Use the student_id received from params
          }
        );
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        setError(true);
      }
    };
    getData();
  }, []);

  const renderCourses = () => {
    return data.map((course, index) => (
      <CourseBox
        key={index}
        course_name={course.course_name}
        course_id={course.course_id}
        course_objective={course.course_objective}
        student_id={student_id.toString()}
      />
    ));
  };

  return (
    <ScrollView style={styles.scroll}>
      <Text style={styles.title}>Courses</Text>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Failed to fetch data. Please try again later.
          </Text>
          <Pressable onPress={getData} style={styles.retryButton}>
            <Text style={styles.retryText}>Retry</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.courseContainer}>{renderCourses()}</View>
        </View>
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  courseContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    paddingLeft: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: "#60a5fa",
    padding: 10,
    borderRadius: 5,
  },
  retryText: {
    color: "#fff",
    fontSize: 16,
  },
});
