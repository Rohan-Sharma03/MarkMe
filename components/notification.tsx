import { View, Text, StyleSheet } from "react-native";

export default function Notification({ name }: { name: string }): JSX.Element {
  return (
    <View style={styles.boxSize}>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  boxSize: {
    width: "100%",
    height: 60,
    backgroundColor: "red",
    borderRadius: 5,
  },
});
