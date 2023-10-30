import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CourseName from "./CourseName";
import { Link, useLocalSearchParams, useRouter } from "expo-router";

export default function CourseBody({
  course_name,
  course_id,
  course_objective,
}: {
  course_name: string;
  course_id: string;
  course_objective: string;
}): JSX.Element {
  const router = useRouter();
  const handleSchedule = () => {
    router.push({
      pathname: "/schedule",
      params: { course_id: course_id },
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Link href="/qrScan" asChild>
            <Pressable style={styles.box}>
              <CourseName name="QR" />
            </Pressable>
          </Link>
          <Link href="/notification" asChild>
            <Pressable style={styles.box}>
              <CourseName name="Notification" />
            </Pressable>
          </Link>
          <Pressable onPress={handleSchedule} style={styles.box}>
            <CourseName name="Course Time Table" />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F5F7",
  },
  content: {
    flexDirection: "column",
    padding: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
  box: {
    width: "100%",
    height: 60,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    justifyContent: "center",
    paddingLeft: 10,
    marginTop: 10,
  },
});
