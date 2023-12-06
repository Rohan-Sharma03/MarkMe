import React, { useEffect, useState } from "react";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../../constants/Colors";
import axios from "axios";
import { useAuth } from "../../context/authContext";

// ... (StudentData interface remains unchanged)
interface StudentData {
  student_id: string;
  student_name: string;
  email: string;
  contact_number: string;
  branch: string;
  section: string;
  admit_year: number;
  gender: string;
}

interface TabBarIconProps {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  size?: number;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, color, size = 28 }) => {
  return <FontAwesome name={name} size={size} color={color} />;
};

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [StudentData, setStudentData] = useState<StudentData>();
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state
  const { studentData } = useAuth();
  console.log("data from useauth : ", studentData);
  console.log("data from useState : ", StudentData);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("studentData");
        if (storedData !== null) {
          setStudentData(JSON.parse(storedData));
          setIsLoading(false);
        } else {
          setIsLoading(false);
          // Handle the case when the stored data is null or not found
        }
      } catch (error) {
        console.error("Error fetching student data:", error);
        setIsLoading(false);
        // Handle errors from AsyncStorage
      }
    };

    fetchStudentData();
  }, []);

  if (isLoading) {
    return (
      <ActivityIndicator
        size="large"
        color={Colors[colorScheme ?? "light"].tint}
      />
    );
  }

  if (!StudentData) {
    return null; // Return loading or placeholder component if data is not available
    // You might display an error message or retry option here
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="home"
        initialParams={StudentData}
        options={{
          tabBarLabel: "Home",
          title: `Hello, ${StudentData.student_name}`,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        initialParams={StudentData}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
