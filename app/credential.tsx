import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Button,
} from "react-native";

export default function Credential() {
  const router = useRouter();
  const [password, setPassword] = React.useState("");
  const [repeatedPassword, setRepeatedPassword] = React.useState("");
  const [passwordMatch, setPasswordMatch] = React.useState(true);
  const params = useLocalSearchParams();
  const { student_email } = params;
  console.log(student_email);
  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordMatch(value === repeatedPassword);
  };

  const handleRepeatedPasswordChange = (value: string) => {
    setRepeatedPassword(value);
    setPasswordMatch(value === password);
  };

  function showToast(message: string) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }

  const setCred = async () => {
    try {
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/api/iSignIn`,
        {
          people_id: student_email,
          people_password: repeatedPassword,
          login_time: "2011-01-01 00:00:00",
        }
      );
      console.log(response.data);
      showToast(response.data.message);
      if (response.data.status == 201) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        handleSubmit();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    // Add your submit logic here
    if (passwordMatch) {
      console.log("Passwords match. Submitting...");
      router.push("/signin");
    } else {
      console.log("Passwords do not match. Please check again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />
      <TextInput
        style={[styles.input, !passwordMatch && styles.inputError]}
        placeholder="Re-enter Password"
        secureTextEntry={true}
        value={repeatedPassword}
        onChangeText={handleRepeatedPasswordChange}
      />
      {!passwordMatch && (
        <Text style={styles.errorText}>Passwords do not match</Text>
      )}
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={setCred} color="#4285f4" />
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
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
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
    width: "70%",
    alignSelf: "center",
    borderRadius: 20,
  },
});
