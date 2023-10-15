import { View, Text, StyleSheet } from "react-native";
import TimeTable from "../components/timetable";
import { ScrollView } from "react-native-gesture-handler";

export default function schedule(): JSX.Element {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TimeTable name="rohan" />
        <TimeTable name="rohan" />
        <TimeTable name="rohan" />
        <TimeTable name="rohan" />
        <TimeTable name="rohan" />
        <TimeTable name="rohan" />
        <TimeTable name="rohan" />
        <TimeTable name="rohan" />
        <TimeTable name="rohan" />
        <TimeTable name="rohan" />
        <TimeTable name="rohan" />
        <TimeTable name="rohan" />
        <TimeTable name="rohan" />
        <TimeTable name="rohan" />
        <TimeTable name="rohan" />
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
