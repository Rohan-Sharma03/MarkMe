import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Notification({ name }: { name: string }): JSX.Element {
  return (
    <View style={styles.container}>
      <Link href="/notificationSummary" asChild>
        <Pressable
          style={({ pressed }) => [
            styles.pressable,
            { opacity: pressed ? 0.5 : 1 },
          ]}
        >
          <View style={styles.content}>
            <FontAwesome
              style={styles.icon}
              name="bell"
              size={25}
              color="#60a5fa"
            />
            <Text style={styles.subtitle}>{name}</Text>
          </View>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "#F2F5F7",
    borderRadius: 5,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 5,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#333",
  },
  pressable: {
    flex: 1,
  },
});
