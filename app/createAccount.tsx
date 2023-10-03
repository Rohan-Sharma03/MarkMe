import * as React from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";

export default function CreateAccount() {
  const [text, onChangeEmail] = React.useState("");
  const [number, onChangePassword] = React.useState("");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>Create an Account</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder="Full Name"
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder="Email"
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder="Roll Number"
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={number}
          placeholder="Phone Number"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={number}
          placeholder="Password"
          keyboardType="numeric"
        />
        <Button
          title="Submit"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
      <View style={styles.container}>
        <Text>Forgot your password?</Text>
      </View>
      <View style={styles.container}>
        <Text>Already have an account?</Text>
        <Text>Sign in to your account</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 90,
    backgroundColor: "gray",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333", // Text color (you can change the value)
    lineHeight: 40, // Line height for the title (you can change the value)
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#666", // Text color (you can change the value)
    lineHeight: 24, // Line height for the subtitle (you can change the value)
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
