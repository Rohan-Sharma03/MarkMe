import { View, Text, ScrollView, StyleSheet } from "react-native";
import Notification from "../components/NotificationBox/notification";
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
    gap: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "97%",
  },
  pressable: {
    flex: 1,
  },
});
