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

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [studentData, setStudentData] = useState([]);

  const getUserDetails = async () => {
    try {
      const res = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/api/studentData`,
        { data: "2020BTechCSE066" }
      );
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserDetails();
      setStudentData(data);
    };
    fetchData();
  }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="home"
        // initialParams={studentData}
        options={{
          tabBarLabel: "Home", // Change the label instead of name
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
        initialParams={studentData} // Pass params data here
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
