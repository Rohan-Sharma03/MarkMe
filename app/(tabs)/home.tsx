import {
  Pressable,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { useEffect, useState } from "react";

import CourseBox from "../../components/CourseBox";
import axios from "axios";

export default function TabOneScreen() {
  const [data, setData] = useState([]);
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
            />
          ))}
        </View>
      )}
      <EditScreenInfo path="app/(tabs)/home.tsx" />
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
