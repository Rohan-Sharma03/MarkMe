import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CourseHeader = ({
  course_name,
  course_objective,
}: {
  course_name: string;
  course_objective: string;
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course_name}</Text>
      <Text style={styles.subtitle}>{course_objective}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    height: 200,
    backgroundColor: "#6C63FF",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FFFFFF",
    lineHeight: 40,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#FFFFFF",
    lineHeight: 24,
    textAlign: "center",
  },
});

export default CourseHeader;
