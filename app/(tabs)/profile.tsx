import { Button, Dimensions, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Profile(): JSX.Element {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { ...pros } = params;

  const fullName = pros.student_name;
  const rollNumber = pros.student_id;
  const email = pros.email;
  const contactNumber = pros.contact_number;
  const branch = pros.branch;
  const section = pros.section;
  const admitYear = pros.admit_year;
  const gender = pros.gender;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/profile.png")}
            style={styles.image}
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

const { width } = Dimensions.get("window");

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
