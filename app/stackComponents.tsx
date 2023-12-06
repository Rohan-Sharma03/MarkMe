import React from "react";
import { Stack } from "expo-router";
import { useAuth } from "../context/authContext"; // Import your AuthProvider or useAuth hook

const StackComponents = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <Stack>
        <Stack.Screen
          name="signin"
          options={{ presentation: "modal", title: "Sign In" }}
        />
        <Stack.Screen
          name="createAccount"
          options={{ presentation: "modal", title: "Create Account" }}
        />
      </Stack>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", title: "Course Requests" }}
      />
      <Stack.Screen
        name="courseDetail"
        options={{ presentation: "modal", title: "Course Details" }}
      />
      <Stack.Screen
        name="notification"
        options={{ presentation: "modal", title: "Notifications" }}
      />
      <Stack.Screen
        name="qrScan"
        options={{ presentation: "modal", title: "QR Scanner" }}
      />
      <Stack.Screen
        name="schedule"
        options={{ presentation: "modal", title: "Class Schedule" }}
      />
      <Stack.Screen
        name="notificationSummary"
        options={{ presentation: "modal", title: "Notification Details" }}
      />
    </Stack>
  );
};

export default StackComponents;
