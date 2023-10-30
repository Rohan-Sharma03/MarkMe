import { View, Text, StyleSheet } from "react-native";
import TimeTable from "../components/timetable";
import { ScrollView } from "react-native-gesture-handler";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function schedule(): JSX.Element {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { id, course_name, course_id, course_objective } = params;
  // console.log("schedelue", course_id);

  console.log("The course ID is :", course_id);

  return (
    <ScrollView>
      <View style={styles.container}>
        <TimeTable
          course_id={typeof course_id === "string" ? course_id : course_id[0]}
        />
      </View>
    </ScrollView>
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
