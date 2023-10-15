import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TimeTable({ name }: { name: string }): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Date</Text>
        <Text style={styles.subtitle}>Class At: 9:00 AM</Text>
        <Text style={styles.subtitle}>Venue: EB@-204</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  box: {
    width: "99%",
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 5,
  },
});
