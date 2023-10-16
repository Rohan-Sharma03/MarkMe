import { View, Text, StyleSheet } from "react-native";
export default function CourseName({ name }: { name: string }): JSX.Element {
  return (
    <View style={styles.boxSize}>
      <Text style={styles.subtitle}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  boxSize: {
    width: "100%",
    height: 60,
    backgroundColor: "#F2F5F7",
    borderRadius: 5,
    justifyContent: "center",
    alignContent: "center",
    paddingLeft: 10,
    borderWidth: 1,
    marginBottom: 5,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#333", // Text color (you can change the value)
    lineHeight: 40, // Line height for the title (you can change the value)
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "normal",
    color: "#666", // Text color (you can change the value)
    lineHeight: 24, // Line height for the subtitle (you can change the value)
  },
});
