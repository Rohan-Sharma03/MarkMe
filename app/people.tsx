import { View, Text, StyleSheet } from "react-native";
import PeopleName from "../components/people";
import { ScrollView } from "react-native-gesture-handler";

export default function people(): JSX.Element {
  return (
    <ScrollView>
      <View style={styles.container}>
        <PeopleName name="rohan" />
        <PeopleName name="rohan" />
        <PeopleName name="rohan" />
        <PeopleName name="rohan" />
        <PeopleName name="rohan" />
        <PeopleName name="rohan" />
        <PeopleName name="rohan" />
        <PeopleName name="rohan" />
        <PeopleName name="rohan" />
        <PeopleName name="rohan" />
        <PeopleName name="rohan" />
        <PeopleName name="rohan" />
        <PeopleName name="rohan" />
        <PeopleName name="rohan" />
        <PeopleName name="rohan" />
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
