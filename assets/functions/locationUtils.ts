// Function to calculate the distance between two coordinates using Haversine formula
import * as Location from "expo-location";

interface AccuracyInfo {
  isAccurate: boolean;
  distance: number;
}

export function calculateDistance(
  classroomCoordinates: number[],
  studentCoordinates: number[]
): number {
  const earthRadius = 6371e3; // Earth's radius in meters

  const [classLat, classLng] = classroomCoordinates;
  const [studentLat, studentLng] = studentCoordinates;

  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

  const deltaLat = toRadians(studentLat - classLat);
  const deltaLng = toRadians(studentLng - classLng);

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(toRadians(classLat)) *
      Math.cos(toRadians(studentLat)) *
      Math.sin(deltaLng / 2) *
      Math.sin(deltaLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadius * c;
  console.log("This is distance ", distance);
  return distance;
}

// Simulating the function to get student coordinates from an API
export async function getStudentCoordinatesFromAPI(
  apiURL: string
): Promise<{ latitude: number; longitude: number }> {
  // Simulating API call
  const { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== "granted") {
    console.log("Permission to access location was denied");

    return { latitude: 0, longitude: 0 };
  }

  const location = await Location.getCurrentPositionAsync({});
  const studentCoordinates = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  }; // Example student coordinates
  console.log(studentCoordinates);
  return studentCoordinates;
}

// Function to check accuracy
export async function checkAccuracy(
  courseId: string,
  classroomCoordinates: number[],
  apiURL: string
): Promise<AccuracyInfo> {
  const studentCoordinates = await getStudentCoordinatesFromAPI(apiURL);
  var distance = calculateDistance(classroomCoordinates, [
    studentCoordinates.latitude,
    studentCoordinates.longitude,
  ]);
  const roundedDistance = Math.round(distance);
  const isAccurate = distance <= 200;

  return {
    isAccurate,
    distance: roundedDistance,
  };
}
