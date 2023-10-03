import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { Image } from "expo-image";
export const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
export default function TabTwoScreen() {
  return (
    <View>
      <View>
        <Image
          source={require("../../assets/images/profile.png")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 1000,
          }}
          placeholder={blurhash}
          contentFit="cover"
          transition={200}
        />
        <Text>Name:ABC</Text>
        <Text>RollNumber:20xxBtechCSExx </Text>
        <Text>Email:abc@gmail.com </Text>
        <Text>Registered Number:9823758457 </Text>
        <Text>Courses Enrolled:4 </Text>
      </View>
      {/* <Text style={styles.title}>Profile</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/profile.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
