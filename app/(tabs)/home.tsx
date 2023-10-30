import {
  Pressable,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { useEffect, useState } from "react";

import CourseBox from "../../components/CourseBox";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";

interface Course {
  course_id: string;
  course_name: string;
  course_objective: string;
  instructor_id: string;
  timetable_id: string;
  course_semester: number;
}

export default function Home() {
  const [data, setData] = useState<Course[]>([]); // Explicitly provide an interface for the data type
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/api/getCourses`
      );
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Courses</Text>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View style={styles.courseContainer}>
          {data.map((course, index) => (
            <CourseBox
              key={index}
              course_name={course.course_name}
              course_id={course.course_id}
              course_objective={course.course_objective}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  courseContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 8,
    gap: 8,
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
});
