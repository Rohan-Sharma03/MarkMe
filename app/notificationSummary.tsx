import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NotificationSummary(): JSX.Element {
  const noticeData = {
    title: "Important Notice",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
    date: "October 31, 2023",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{noticeData.title}</Text>
      <Text style={styles.date}>{noticeData.date}</Text>
      <View style={styles.noticeContentContainer}>
        <Text style={styles.noticeContent}>{noticeData.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
    marginTop: 40,
  },
  date: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  noticeContentContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  noticeContent: {
    fontSize: 18,
    color: "#555",
    textAlign: "left",
  },
});
