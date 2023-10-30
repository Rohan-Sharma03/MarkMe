import React from "react";
import { View } from "react-native";
import CourseHeader from "../components/CourseBox/CourseHeader";
import CourseBody from "../components/CourseBox/CourseBody";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function CourseDetail(): JSX.Element {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { course_name, course_id, course_objective } = params;

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <CourseHeader
        course_name={course_name.toString()}
        course_objective={course_objective.toString()}
      />
      <CourseBody
        course_name={course_name.toString()}
        course_id={course_id.toString()}
        course_objective={course_objective.toString()}
      />
    </View>
  );
}
