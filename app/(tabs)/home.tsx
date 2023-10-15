import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { ScrollView } from "react-native-gesture-handler";
import CourseBox from "../../components/CourseBox";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import Colors from "../../constants/Colors";

export default function TabOneScreen() {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text style={styles.title}>Courses</Text>
      <View style={styles.container}>
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
        <CourseBox />
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
