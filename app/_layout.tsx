import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { AuthProvider } from "../context/authContext"; // Import your AuthProvider or useAuth hook
import StackComponents from "./stackComponents"; // Import your StackComponents file

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <Stack>
          <Stack.Screen
            name="signin"
            options={{ presentation: "modal", title: "Sign In" }}
          />
          <Stack.Screen
            name="createAccount"
            options={{ presentation: "modal", title: "Create Account" }}
          />
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

        {/* <StackComponents /> */}
      </AuthProvider>
    </ThemeProvider>
  );
}
