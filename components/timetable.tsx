import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

type TimeTableItem = {
  association_timetable_id: string;
  days_of_week: string[];
  end_time: string[];
  period_type: string;
  start_time: string[];
  timetable_id: string;
  venue: string;
};

export default function TimeTable({ course_id }: { course_id: string }) {
  const [timeTable, setTimeTable] = useState<TimeTableItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTimeTable = async () => {
      try {
        const res = await axios.get(
          `${process.env.EXPO_PUBLIC_API_URL}/api/${course_id}/getTimeTable`
        );
        console.log("API Response:", res.data);
        setTimeTable(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching timetable:", error);
        setLoading(false);
      }
    };
    fetchTimeTable();
  }, [course_id]);

  const getDay = (): string => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date().getDay();
    return days[today];
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : timeTable.length > 0 ? (
        timeTable.map((item, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.title}>
              {item.period_type === "Lecture" ? "📚 Lecture" : "🔬 Lab"}
            </Text>
            {item.days_of_week.map((day, i) => (
              <View
                key={i}
                style={[
                  styles.scheduleContainer,
                  day === getDay() && styles.highlight,
                ]}
              >
                <Text style={styles.subtitle}>Day: {day}</Text>
                <Text style={styles.scheduleText}>
                  Class At:{" "}
                  <Text style={styles.bold}>{item.start_time[i]}</Text> -{" "}
                  <Text style={styles.bold}>{item.end_time[i]}</Text>
                </Text>
                <Text style={styles.subtitle}>Venue: {item.venue}</Text>
              </View>
            ))}
          </View>
        ))
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  box: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    borderRadius: 10,
    width: 340,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333333",
  },
  bold: {
    fontWeight: "bold",
  },
  scheduleContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
  scheduleText: {
    marginBottom: 5,
    color: "#555555",
  },
  highlight: {
    backgroundColor: "#ffcc00", // Customize highlight color here
  },
});
