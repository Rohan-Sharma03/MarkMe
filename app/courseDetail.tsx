import { View, Text } from "react-native";
import CourseHeader from "../components/CourseBox/CourseHeader";
import CourseBody from "../components/CourseBox/CourseBody";

export default function courseDetail(): JSX.Element {
  return (
    <View style={{ backgroundColor: "white" }}>
      {/* <Text>Course Details</Text> */}
      <CourseHeader />
      <CourseBody />
    </View>
  );
}
