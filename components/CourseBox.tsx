import * as React from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { View, Text, Pressable, StyleSheet } from "react-native";
export const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function CourseBox(): JSX.Element {
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
        <Link href="/qrScan" asChild>
          <Pressable>
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
        </Link>

        <Link href="/CourseDetail" asChild>
          <Pressable>
            {({ pressed }) => (
              <View style={{ opacity: pressed ? 0.5 : 1 }}>
                <Text
                  style={{
                    top: -30,
                    fontSize: 20,
                    fontWeight: "bold",
                    paddingLeft: 10,
                  }}
                >
                  NoSQl
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
          CS116
        </Text>
      </View>
    </View>
  );
}

function CourseImage(): JSX.Element {
  return <View></View>;
}

function CourseName(): JSX.Element {
  return (
    <View>
      <Text>NoSQl</Text>
    </View>
  );
}

function QrIcon() {}
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
