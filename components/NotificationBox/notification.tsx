import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Notification({
  subject,
  message,
}: {
  subject: string;
  message: string;
}): JSX.Element {
  const router = useRouter();
  const handlePress = () => {
    router.push({ pathname: "/notificationSummary", params: { msg: message } });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <View style={styles.content}>
          <FontAwesome
            style={styles.icon}
            name="bell"
            size={25}
            color="#60a5fa"
          />
          <Text style={styles.subtitle}>{message}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    elevation: 5,
    textDecoration: "none", // Ensure no underlines for the link
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  icon: {
    marginRight: 15,
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
  },
});
