import React, { useEffect, useState } from "react";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../../constants/Colors";
import axios from "axios";

// ... (StudentData interface remains unchanged)
interface StudentData {
  student_id: string;
  student_name: string;
  email: string;
  contact_number: string;
  branch: string;
  section: string;
  admit_year: number;
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
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        let storedData = await AsyncStorage.getItem("studentData");
        if (!storedData) {
          const res = await axios.post(
            `${process.env.EXPO_PUBLIC_API_URL}/api/studentData`,
            { data: "2020BTechCSE066" }
          );
          const fetchedData = res.data.data as StudentData;
          await AsyncStorage.setItem(
            "studentData",
            JSON.stringify(fetchedData)
          );
          console.log("the data recived :", fetchedData);
          setStudentData(fetchedData);
        } else {
          setStudentData(JSON.parse(storedData));
        }
        setIsLoading(false); // Set loading state to false after data fetch
      } catch (error) {
        console.error("Error fetching student data:", error);
        setIsLoading(false); // Set loading state to false in case of error
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

  if (!studentData) {
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
        initialParams={studentData}
        options={{
          tabBarLabel: "Home",
          title: `Hello, ${studentData.student_name}`,
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
        initialParams={studentData}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
