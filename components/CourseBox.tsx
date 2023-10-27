import * as React from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link, useLocalSearchParams, useRouter } from "expo-router";

export const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function CourseBox({
  course_name,
  course_id,
  course_objective,
}: {
  course_name: string;
  course_id: string;
  course_objective: string;
}): JSX.Element {
  const params = useLocalSearchParams();
  const { id = 42, other } = params;
  const facultyInOffice = false; // Change this to determine if the faculty is in the office
  const navigation = useNavigation();
  const router = useRouter();

  const handlePressC = () => {
    router.push({
      pathname: "/courseDetail",
      params: {
        // post: "random",
        // id: 86,
        course_name: course_name,
        course_id: course_id,
        course_objective: course_objective,
      },
    });
    // navigation.navigate("CourseDetail", { courseId: course_id });
  };
  const handlePressQR = () => {
    router.push({
      pathname: "/qrScan",
      params: {
        post: "random",
        id: 86,
        other: "This is other",
      },
    });
    // navigation.navigate("QRScan");
  };

  return (
    <View style={styles.elevation}>
      <View
        style={{
          padding: 10,
          width: "100%",
          minHeight: 80,
          backgroundColor: "#DAF7A6",
        }}
      >
        <TouchableOpacity onPress={handlePressQR}>
          <FontAwesome
            style={{ left: 5, color: "#60a5fa" }}
            name="qrcode"
            size={50}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={handlePressC}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              padding: 10,
              width: 180,
            }}
            numberOfLines={1}
            // ellipsizeMode="tail"
          >
            {course_name}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            paddingLeft: 10,
          }}
        >
          {course_id}
        </Text>
        <View style={{ position: "absolute", top: 40, right: 10 }}>
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
  card: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "gray",
    minWidth: "47%",
    minHeight: 90,
  },
  elevation: {
    shadowColor: "#ff3333",
    elevation: 50,
  },
});
