import { View, Text, StyleSheet, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CourseBox from "../CourseBox";
import CourseName from "./CourseName";
import { Link } from "expo-router";
export default function CourseBody(): JSX.Element {
  return (
    <View>
      <ScrollView style={{ height: "65%" }}>
        <View style={styles.container}>
          <Link href="/qrScan" asChild>
            <Pressable>
              {({ pressed }) => (
                <View style={{ opacity: pressed ? 0.5 : 1 }}>
                  <CourseName name="QR" />
                </View>
              )}
            </Pressable>
          </Link>
          <Link href="/people" asChild>
            <Pressable>
              {({ pressed }) => (
                <View style={{ opacity: pressed ? 0.5 : 1 }}>
                  <CourseName name="People" />
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
        </View>
        {/* <Text>Body</Text> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    padding: 10,
  },
});
