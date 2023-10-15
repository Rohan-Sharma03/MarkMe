import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailNotification() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is detailed notification</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
