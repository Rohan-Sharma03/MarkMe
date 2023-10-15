import { StyleSheet } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { Image } from "expo-image";

export const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/images/profile.png")}
          style={styles.image}
          placeholder={blurhash}
          contentFit="cover"
          transition={200}
        />
        <Text style={styles.text}>Name: ABC</Text>
        <Text style={styles.text}>RollNumber: 20xxBtechCSExx</Text>
        <Text style={styles.text}>Email: abc@gmail.com</Text>
        <Text style={styles.text}>Registered Number: 9823758457</Text>
        <Text style={styles.text}>Courses Enrolled: 4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});
