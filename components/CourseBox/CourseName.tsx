import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function CourseName({ name }: { name: string }): JSX.Element {
  const screenWidth = Dimensions.get("window").width;
  return (
    <View style={[styles.box, { width: screenWidth * 0.9 }]}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 60,
    backgroundColor: "#D1D5DB",
    borderRadius: 10,
    justifyContent: "space-around",
    paddingLeft: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "normal",
    color: "#4B5563",
  },
});
