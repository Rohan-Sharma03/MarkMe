import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import * as React from "react";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";

export default function Signin(): JSX.Element {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const getData = async () => {
    // if (email && password) {
    try {
      const res = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/api/users`
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    // } else {
    //   Alert.alert("Error", "Please fill in all the fields.");
    // }
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
          <Button title="Submit" onPress={getData} color="#4285f4" />
        </View>
      </View>
      <View style={styles.forgotPasswordContainer}>
        <Link href="/credential" asChild>
          <Text style={styles.subtitle}>Forgot your password?</Text>
        </Link>
      </View>
      <View style={styles.signUpContainer}>
        <Link href="/createAccount" asChild>
          <Text style={styles.subtitle}>
            Don’t have an account yet? Sign Up
          </Text>
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
