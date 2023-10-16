import { Link } from "expo-router";
import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Pressable,
} from "react-native";

export default function CreateAccount(): JSX.Element {
  const [fullName, onChangeFullName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [rollNumber, onChangeRollNumber] = React.useState("");
  const [phoneNumber, onChangePhoneNumber] = React.useState("");
  const [password, onChangePassword] = React.useState("");

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
          onChangeText={onChangePhoneNumber}
          value={phoneNumber}
          placeholder="Phone Number"
          keyboardType="numeric"
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
