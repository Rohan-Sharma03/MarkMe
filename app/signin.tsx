import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import * as React from "react";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Pressable,
} from "react-native";

export default function Signin(): JSX.Element {
  const getData = async () => {
    try {
      const res = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/testAPI`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // var requestOptions = {};
  // console.log(process.env.EXPO_PUBLIC_API_URL);

  // const getMovies = async () => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.EXPO_PUBLIC_API_URL}/testAPI`
  //     );
  //     const json = await response.json();
  //     console.log(json.info);
  //     Alert.alert(json.info);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // getMovies();
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

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
        <Button title="Submit" onPress={() => getData()} />
      </View>
      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.subtitle}>Forgot your password?</Text>
      </View>
      <View style={styles.signUpContainer}>
        <Link href="/createAccount" asChild>
          <Pressable
            style={({ pressed }) => [
              styles.pressable,
              { opacity: pressed ? 0.5 : 1 },
            ]}
          >
            <Text style={styles.subtitle}>
              Don’t have an account yet? Sign Up
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
    fontSize: 18,
    color: "#333",
  },
  forgotPasswordContainer: {
    marginTop: 20,
  },
  signUpContainer: {
    marginTop: 20,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },

  pressable: {
    flex: 1,
  },
});
