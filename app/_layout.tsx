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

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
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
          name="createAccount"
          options={{ presentation: "modal", title: "Create Account" }}
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
          name="signin"
          options={{ presentation: "modal", title: "Sign Up" }}
        />
        <Stack.Screen
          name="notificationSummary"
          options={{ presentation: "modal", title: "Notification Details" }}
        />
        <Stack.Screen
          name="credential"
          options={{ presentation: "modal", title: "Set Password" }}
        />
      </Stack>
    </ThemeProvider>
  );
}
