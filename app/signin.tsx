import * as React from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";

export default function Signin() {
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
        <Button
          title="Submit"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.subtitle}>Forgot your password?</Text>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.subtitle}>Don’t have an account yet?</Text>
        <Text style={styles.subtitle}>Sign Up</Text>
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
  signUpContainer: {
    marginTop: 20,
  },
});
