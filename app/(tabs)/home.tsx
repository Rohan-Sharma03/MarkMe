import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { ScrollView } from "react-native-gesture-handler";
import CourseBox from "../../components/CourseBox";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TabOneScreen() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/api/getCourses`
      );
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text style={styles.title}>Courses</Text>
      <View style={styles.container}>
        {data.map((course, index) => (
          <CourseBox
            key={index}
            course_name={course.course_name}
            course_id={course.course_id}
          />
        ))}

        {/* <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox /> */}
      </View>
      <EditScreenInfo path="app/(tabs)/home.tsx" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    flexWrap: "wrap",
  },
  title: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 7,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
