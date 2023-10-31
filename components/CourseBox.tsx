import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";

export default function CourseBox({
  course_name,
  course_id,
  course_objective,
}: {
  course_name: string;
  course_id: string;
  course_objective: string;
}): JSX.Element {
  const facultyInOffice = false; // Change this to determine if the faculty is in the office
  const navigation = useNavigation();
  const router = useRouter();

  const handlePressC = () => {
    router.push({
      pathname: "/courseDetail",
      params: {
        course_name: course_name,
        course_id: course_id,
        course_objective: course_objective,
      },
    });
  };
  const handlePressQR = () => {
    router.push({
      pathname: "/qrScan",
      params: {
        post: "random",
        id: 86,
        other: "This is other",
      },
    });
  };

  return (
    <View style={styles.boxContainer}>
      <View style={styles.box}>
        <View style={styles.elevation}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handlePressQR}>
              <FontAwesome name="qrcode" size={50} color="#60a5fa" />
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <TouchableOpacity onPress={handlePressC}>
              <Text style={styles.courseNameText} numberOfLines={1}>
                {course_name}
              </Text>
            </TouchableOpacity>
            <Text style={styles.courseIdText}>{course_id}</Text>
            <View style={styles.scheduleIcon}>
              <MaterialIcons
                name={facultyInOffice ? "schedule" : "schedule-send"}
                size={30}
                color={facultyInOffice ? "green" : "red"}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    width: "50%",
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  box: {
    width: "100%",
  },
  elevation: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    padding: 10,
    width: "100%",
    minHeight: 80,
    backgroundColor: "#DAF7A6",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  card: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#F5F5F5",
    minHeight: 90,
    padding: 10,
    position: "relative",
  },
  courseNameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  courseIdText: {
    paddingLeft: 10,
  },
  scheduleIcon: {
    position: "absolute",
    top: 40,
    right: 10,
  },
});
