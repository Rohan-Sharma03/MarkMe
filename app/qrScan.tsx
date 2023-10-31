import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, ToastAndroid } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { checkAccuracy } from "../assets/functions/locationUtils";

export default function qrScan(): JSX.Element {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { id, course_id, other } = params;

  function showToast() {
    ToastAndroid.show("Attendance marked successfully!", ToastAndroid.LONG);
  }
  function showFailedToast() {
    ToastAndroid.show("Attendance marked not Marked !", ToastAndroid.LONG);
  }

  console.log(id, other);

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean>(false);
  const [text, setText] = useState<string>("Not yet scanned");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = async ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    setText(data);
    const value = await checkAccuracy(course_id, [26.835693, 75.650315], "api");
    console.log("QR VALUE", value);
    if (value) {
      showToast();
      console.log("Type: " + type + "\nData: " + data);
    } else {
      showFailedToast();
    }
    router.push("/(tabs)/home");
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  // Return the View
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && (
        <Button
          title={"Scan again?"}
          onPress={() => setScanned(false)}
          color="tomato"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "gray",
  },
});
