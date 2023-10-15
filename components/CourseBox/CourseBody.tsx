import { View, Text, StyleSheet, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CourseBox from "../CourseBox";
import CourseName from "./CourseName";
import { Link } from "expo-router";
export default function CourseBody(): JSX.Element {
  return (
    <View>
      <ScrollView style={{ height: "65%" }}>
        <View style={Styles.container1}>
          <Link href="/qrScan" asChild>
            <Pressable>
              {({ pressed }) => (
                <View style={{ opacity: pressed ? 0.5 : 1 }}>
                  <CourseName name="QR" />
                </View>
              )}
            </Pressable>
          </Link>
          <Link href="/notification" asChild>
            <Pressable>
              {({ pressed }) => (
                <View style={{ opacity: pressed ? 0.5 : 1 }}>
                  <CourseName name="Notification" />
                </View>
              )}
            </Pressable>
          </Link>
          <Link href="/schedule" asChild>
            <Pressable>
              {({ pressed }) => (
                <View style={{ opacity: pressed ? 0.5 : 1 }}>
                  <CourseName name="Course Time Table " />
                </View>
              )}
            </Pressable>
          </Link>
        </View>
        {/* <Text>Body</Text> */}
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    padding: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    padding: 10,
    height: "auto",
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
