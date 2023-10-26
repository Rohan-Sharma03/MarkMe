import * as React from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";

import { useNavigation } from "@react-navigation/native";
import { Link, useRouter } from "expo-router";
import { View, Text, Pressable, StyleSheet } from "react-native";
export const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function CourseBox({
  course_name,
  course_id,
}: {
  course_name: string;
  course_id: string;
}): JSX.Element {
  const facultyInOffice = false; // Change this to determine if the faculty is in the office
  const navigation = useNavigation();
  const router = useRouter();

  const handlePressC = () => {
    router.push({ pathname: "/courseDetail" });
  };
  const handlePressQR = () => {
    router.push("/qrScan");
  };

  return (
    <View style={styles.elevation}>
      <View style={styles.card}>
        <View
          style={{
            width: "100%",
            minHeight: 80,
            backgroundColor: "#DAF7A6",
          }}
        ></View>
        <Pressable onPress={handlePressQR}>
          {({ pressed }) => (
            <View style={{ opacity: pressed ? 0.5 : 1 }}>
              <FontAwesome
                style={{ left: 130, top: -70 }}
                name="qrcode"
                size={40}
                color="#60a5fa"
              />
            </View>
          )}
        </Pressable>

        <Link
          href={{
            pathname: "/courseDetail",
            params: { id: "rohan" },
          }}
          asChild
        >
          <Pressable onPress={handlePressC}>
            {({ pressed }) => (
              <View style={{ opacity: pressed ? 0.5 : 1 }}>
                <Text
                  style={{
                    top: -30,
                    fontSize: 20,
                    fontWeight: "bold",
                    paddingLeft: 10,
                    width: 180,
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {course_name}
                </Text>
              </View>
            )}
          </Pressable>
        </Link>
        <Text
          style={{
            top: -20,
            marginTop: -4,
            marginBottom: -3,
            paddingLeft: 10,
          }}
        >
          {course_id}
        </Text>
        <View style={{ position: "absolute", top: 120, right: 20 }}>
          <MaterialIcons
            name={facultyInOffice ? "schedule" : "schedule-send"}
            size={30}
            color={facultyInOffice ? "green" : "red"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 13,
  },
  card: {
    borderRadius: 8,
    backgroundColor: "gray",
    minWidth: "47%",
    minHeight: 120,
  },

  shadowProp: {
    shadowOffset: { width: 0, height: 10 },
    shadowColor: "#171717",
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  elevation: {
    shadowColor: "#ff3333",
    elevation: 50,
  },
});
