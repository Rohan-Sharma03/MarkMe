import { View, Text, ScrollView, StyleSheet } from "react-native";
import Notification from "../components/notification";
export default function notification(): JSX.Element {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Notification name="rohan" />
        <Notification name="rohan" />
        <Notification name="rohan" />
        <Notification name="rohan" />
        <Notification name="rohan" />
        <Notification name="rohan" />
        <Notification name="rohan" />
        <Notification name="rohan" />
        <Notification name="rohan" />
        <Notification name="rohan" />
        <Notification name="rohan" />
        <Notification name="rohan" />
        <Notification name="rohan" />
        <Notification name="rohan" />
        <Notification name="rohan" />
        <Notification name="rohan" />
        <Notification name="rohan" />
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
    justifyContent: "center",
    alignItems: "center",
  },
});
