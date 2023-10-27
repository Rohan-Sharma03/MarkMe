import { View, Text, StyleSheet } from "react-native";
export default function CourseHeader({
  course_name,
  course_objective,
}: {
  course_name: string;
  course_objective: string;
}): JSX.Element {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{course_name}</Text>
      <Text style={Styles.subtitle}> {course_objective}</Text>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 200,
    backgroundColor: "#D5E7F7",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333", // Text color (you can change the value)
    lineHeight: 40, // Line height for the title (you can change the value)
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#666", // Text color (you can change the value)
    lineHeight: 24, // Line height for the subtitle (you can change the value)
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
