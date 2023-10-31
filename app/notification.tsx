import {
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Text,
} from "react-native";
import Notification from "../components/NotificationBox/notification";
import { useEffect, useState } from "react";
import axios from "axios";

interface Notification {
  instructor_id: string;
  course_id: string;
  subject: string;
  message: string;
  date: string;
}

export default function NotificationScreen(): JSX.Element {
  const [notifications, setNotifications] = useState<Notification[]>([]); // Specify the type of 'notifications'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const res = await axios.post(
          `${process.env.EXPO_PUBLIC_API_URL}/api/csNotification`,
          { course_id: "CS1225" }
        );
        setNotifications(res.data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchNotification();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <View style={styles.notificationContainer}>
          {notifications.map((notification, index) => (
            <Notification
              key={index}
              message={notification.message}
              subject={notification.subject} // Ensure the properties 'message' and 'subject' are present in 'notifications'
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: "#555",
  },
  notificationContainer: {
    padding: 20,
  },
});
