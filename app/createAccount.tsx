import axios from "axios";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Pressable,
  ToastAndroid,
  ScrollView,
} from "react-native";

export default function CreateAccount() {
  const [fullName, onChangeFullName] = useState("Rohan");
  const [email, onChangeEmail] = useState("rohan@jklu.edu.in");
  const [admitYear, onChangeAdmitYear] = useState("2020");
  const [branch, onChangeBranch] = useState("BTechCSE");
  const [rollNumber, onChangeRollNumber] = useState("2020BtechCSE066");
  const [contactNumber, onChangeContactNumber] = useState("348795423");
  const [section, onChangeSection] = useState("A");
  const [gender, onChangeGender] = useState("Male");
  const router = useRouter();
  function showToast(message: string) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }
  const handleSignInOption = () => {
    router.replace({
      pathname: "/signin",
      // params: {
      //   post: "random",
      //   id: 86,
      //   student_email: email,
      // },
    });
  };
  const validateFields = () => {
    if (
      fullName === "" ||
      email === "" ||
      admitYear === "" ||
      branch === "" ||
      rollNumber === "" ||
      contactNumber === "" ||
      section === "" ||
      gender === ""
    ) {
      Alert.alert("Error", "Please fill in all the fields.");
      return false;
    }
    return true;
  };
  const handleSetCredential = () => {
    router.push({
      pathname: "/credential",
      params: {
        post: "random",
        id: 86,
        student_email: email,
      },
    });
  };
  const createAccount = async () => {
    try {
      // if (!validateFields()) return;
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/api/csAccount`,
        {
          student_name: fullName,
          email: email,
          student_id: rollNumber,
          contact_number: contactNumber,
          branch: branch,
          section: section,
          admit_year: admitYear,
          gender: gender,
        }
      );
      console.log(response);
      showToast(response.data.message);
      if (response.data.status == 200) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        handleSetCredential();
      }
    } catch (error) {
      showToast("ERROR");
      console.error(error);
      Alert.alert("Error", "An error occurred. Please try again later.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.title}>Create an Account</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeFullName}
          placeholder="Full Name"
          value={fullName}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder="Email"
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeRollNumber}
          placeholder="Roll Number"
          value={rollNumber}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeContactNumber}
          value={contactNumber}
          placeholder="Contact Number"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeBranch}
          value={branch}
          placeholder="Branch"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSection}
          value={section}
          placeholder="Section"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAdmitYear}
          value={admitYear}
          placeholder="Admit Year"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeGender}
          value={gender}
          placeholder="Gender"
        />
        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={createAccount} color="#4285f4" />
        </View>
      </View>
      <View style={styles.needHelpContainer}>
        <Text style={styles.subtitle}>Need any Help?</Text>
      </View>
      <Pressable
        onPress={() => handleSignInOption()}
        style={styles.signInContainer}
      >
        <Text style={styles.subtitle}>
          Already have an account? Sign in Now!
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "white",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    height: 50,
    width: "100%",
    marginVertical: 10,
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    fontSize: 16,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
    textAlign: "center",
    marginTop: 10,
  },
  needHelpContainer: {
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: "70%",
    alignSelf: "center",
    borderRadius: 20,
  },
  signInContainer: {
    // marginTop: ,
    paddingBottom: 20,
  },
});
