import { Button, Dimensions, StyleSheet, ScrollView } from "react-native";
import { Text, View } from "../../components/Themed";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

export const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeo";

export default function Profile(): JSX.Element {
  const router = useRouter();
  const fullName = "John Doe"; // Replace with actual data
  const rollNumber = "2023BtechCSE001"; // Replace with actual data
  const email = "johndoe@example.com"; // Replace with actual data
  const contactNumber = "1234567890"; // Replace with actual data
  const branch = "Computer Science"; // Replace with actual data
  const section = "A"; // Replace with actual data
  const admitYear = "2023"; // Replace with actual data
  const gender = "Male"; // Replace with actual data

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/profile.png")}
            style={styles.image}
            placeholder={blurhash}
            contentFit="cover"
            transition={200}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Profile Information</Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Name: </Text>
            {fullName}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Roll Number: </Text>
            {rollNumber}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Email: </Text>
            {email}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Contact Number: </Text>
            {contactNumber}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Branch: </Text>
            {branch}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Section: </Text>
            {section}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Admit Year: </Text>
            {admitYear}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.label}>Gender: </Text>
            {gender}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Log Out" onPress={() => router.push("/signin")} />
        </View>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#e1e1e1",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: width * 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  textContainer: {
    width: "100%",
    alignItems: "flex-start",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: "left",
  },
  label: {
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 30,
    width: "70%",
    marginBottom: 20,
  },
});
