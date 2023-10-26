import { View, Text } from "react-native";
import CourseHeader from "../components/CourseBox/CourseHeader";
import CourseBody from "../components/CourseBox/CourseBody";
import { useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
type RouteParams = {
  course_name: string;
  // Add other expected parameters here
};
export default function CourseDetail(): JSX.Element {
  const route = useRoute();
  const { course_name } = route.params as RouteParams;
  return (
    <View style={{ backgroundColor: "white" }}>
      <Text>{course_name}</Text>
      <CourseHeader course_name={course_name} />
      <CourseBody />
    </View>
  );
}
