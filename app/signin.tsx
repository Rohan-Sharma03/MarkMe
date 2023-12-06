import { FontAwesome } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import * as React from "react";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  ToastAndroid,
  Alert,
  Pressable,
} from "react-native";
import { useAuth } from "../context/authContext";

export default function Signin(): JSX.Element {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const { login } = useAuth();
  const router = useRouter();
  function showToast(message: string) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }

  const handleSignIn = () => {
    router.replace({
      pathname: "/(tabs)/home",
      params: {
        post: "random",
        id: 86,
        student_email: email,
      },
    });
  };

  const handleCreateAccountOption = () => {
    router.replace({
      pathname: "/createAccount",
    });
  };

  const signIn = async () => {
    try {
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/api/iSignInDupli`,
        {
          people_id: email,
          people_password: password,
        }
      );
      console.log(response.data);
      const StudentData = await fetchProfile();
      if (StudentData) {
        login(StudentData);
      }
      showToast(response.data.message);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (response.data.status == 200) {
        handleSignIn();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProfile = async () => {
    try {
      const res = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/api/getStudentProfile`,
        { student_email: email }
      );

      const StudentInfo = {
        student_id: res.data.data[0].student_id,
        student_name: res.data.data[0].student_name,
        email: res.data.data[0].email,
        contact_number: res.data.data[0].contact_number,
        branch: res.data.data[0].branch,
        section: res.data.data[0].section,
        admit_year: res.data.data[0].admit_year,
        gender: res.data.data[0].gender,
      };
      console.log("Student INFO :", StudentInfo);
      return StudentInfo;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.title}>Sign In</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder="Email"
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={signIn} color="#4285f4" />
        </View>
      </View>
      <View style={styles.forgotPasswordContainer}>
        <Link href="/credential" asChild>
          <Text style={styles.subtitle}>Forgot your password?</Text>
        </Link>
      </View>
      <View style={styles.signUpContainer}>
        <Pressable
          onPress={() => handleCreateAccountOption()}
          // style={styles.signInContainer}
        >
          <Text style={styles.subtitle}>
            Don’t have an account yet? Sign Up
          </Text>
        </Pressable>
        {/* <Link href="/createAccount" asChild>
          <Text style={styles.subtitle}>
            Don’t have an account yet? Sign Up
          </Text>
        </Link> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
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
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
    textAlign: "center",
    // marginTop: 20,
  },
  forgotPasswordContainer: {
    marginTop: 20,
  },
  signUpContainer: {
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: "70%",
    alignSelf: "center",
    borderRadius: 20,
  },
});
