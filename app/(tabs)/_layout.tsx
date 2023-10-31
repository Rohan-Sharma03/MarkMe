import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import axios from "axios";
import { useEffect, useState } from "react";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

// ... (imports remain unchanged)

interface StudentData {
  student_id: string;
  student_name: string;
  email: string;
  contact_number: string;
  branch: string;
  section: string;
  admit_year: number;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [studentData, setStudentData] = useState<StudentData | null>(null);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await axios.post(
          `${process.env.EXPO_PUBLIC_API_URL}/api/studentData`,
          { data: "2020BTechCSE066" }
        );
        setStudentData(res.data.data);
        return res.data.data as StudentData; // Type assertion for the response data
      } catch (err) {
        console.log(err);
        return null;
      }
    };
    getUserDetails();
  }, []);

  if (!studentData) {
    return null; // Return loading or placeholder component if data is not available
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="home"
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
