import axios from "axios";
import { Link, useRouter } from "expo-router";
import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Pressable,
  ToastAndroid,
} from "react-native";

export default function CreateAccount(): JSX.Element {
  const router = useRouter();
  const [fullName, onChangeFullName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [admitYear, onChangeAdmitYear] = React.useState("");
  const [branch, onChangeBranch] = React.useState("");
  const [rollNumber, onChangeRollNumber] = React.useState("");
  const [contactNumber, onChangeContactNumber] = React.useState("");
  const [section, onChangeSection] = React.useState("");
  function showToast() {
    ToastAndroid.show("Request sent successfully!", ToastAndroid.SHORT);
  }
  const accountData = async () => {
    try {
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/api/csAccount`,
        {
          student_id: rollNumber,
          student_name: fullName,
          email: email,
          contact_number: contactNumber,
          branch: branch,
          section: section,
          admitYear: admitYear,
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        showToast();
        await new Promise((r) => setTimeout(r, 2000));
        // setInterval(() => {
        router.push("/credential");
        // }, 2000);
        // Handle success if needed
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "An error occurred. Please try again later.");
    }
  };

  const temp = async () => {
    await new Promise((r) => setTimeout(r, 2000));
    // setInterval(() => {
    router.push("/credential");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>Create an Account</Text>
      </View>
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
          placeholder="e.g. +91 391034804"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeBranch}
          value={branch}
          placeholder="B Tech CSE"
          // secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSection}
          value={section}
          placeholder="section"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAdmitYear}
          value={admitYear}
          placeholder="e.g. 2020"
        />
        <Button title="Submit" onPress={accountData} />
      </View>
      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.subtitle}>Need any Help?</Text>
      </View>
      <View style={styles.signInContainer}>
        <Link href="/signin" asChild>
          <Pressable
            style={({ pressed }) => [
              styles.pressable,
              { opacity: pressed ? 0.5 : 1 },
            ]}
          >
            <Text style={styles.subtitle}>
              Already have an account?Sign in to your account
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
  },
  forgotPasswordContainer: {
    marginTop: 20,
  },
  signInContainer: {
    marginTop: 20,
  },
  pressable: {
    flex: 1,
  },
});
