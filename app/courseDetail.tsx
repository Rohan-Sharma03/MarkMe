import { View, Text } from "react-native";
import CourseHeader from "../components/CourseBox/CourseHeader";
import CourseBody from "../components/CourseBox/CourseBody";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
type RouteParams = {
  course_name: string;
  // Add other expected parameters here
};
export default function CourseDetail(): JSX.Element {
  const navigation = useNavigation();
  const router = useRouter();
  const params = useLocalSearchParams();
  const { id, course_name, course_objective } = params;

  console.log(id, course_name);
  const route = useRoute();
  return (
    <View style={{ backgroundColor: "white" }}>
      <CourseHeader
        course_name={course_name.toString()}
        course_objective={course_objective.toString()}
      />
      <CourseBody />
    </View>
  );
}
