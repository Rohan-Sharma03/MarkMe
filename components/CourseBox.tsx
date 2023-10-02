import * as React from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { View, Text, Pressable } from "react-native";
export const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function CourseBox(): JSX.Element {
  return (
    <View
      style={{
        backgroundColor: "gray",
        minWidth: "47%",
        minHeight: 120,
        // margin: 1,
      }}
    >
      {/* <Image
        source={"../assets/images/favicon.png"}
        style={{
          width: "100%",
          minHeight: 80,
          borderRadius: 20,
        }}
        placeholder={blurhash}
        contentFit="cover"
        transition={200}
      /> */}
      <View
        style={{ width: "100%", minHeight: 80, backgroundColor: "white" }}
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

      <Link href="/courseDetail" asChild>
        <Pressable>
          {({ pressed }) => (
            <View style={{ opacity: pressed ? 0.5 : 1 }}>
              <Text
                style={{
                  top: -20,
                  fontSize: 20,
                  marginTop: 10,
                  marginBottom: 7,
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
