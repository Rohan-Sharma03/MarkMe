import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type StudentData = {
  student_id: string;
  student_name: string;
  email: string;
  contact_number: string;
  branch: string;
  section: string;
  admit_year: number;
  gender: string;
  // Add other student-related fields as needed
};

type AuthContextType = {
  isLoggedIn: boolean;
  studentData: StudentData | null;
  login: (student: StudentData) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [studentData, setStudentData] = useState<StudentData | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const storedLoggedIn = await AsyncStorage.getItem("isLoggedIn");
        const storedStudentData = await AsyncStorage.getItem("studentData");

        if (storedLoggedIn !== null) {
          setIsLoggedIn(JSON.parse(storedLoggedIn));
        }
        if (storedStudentData !== null) {
          setStudentData(JSON.parse(storedStudentData));
        }
      } catch (error) {
        console.error("Error fetching data from AsyncStorage:", error);
      }
    };

    getData();
  }, []);

  const login = async (student: StudentData) => {
    try {
      setIsLoggedIn(true);
      setStudentData(student);
      await AsyncStorage.setItem("isLoggedIn", JSON.stringify(true));
      await AsyncStorage.setItem("studentData", JSON.stringify(student));
    } catch (error) {
      console.error("Error storing data in AsyncStorage:", error);
    }
  };

  const logout = async () => {
    try {
      setIsLoggedIn(false);
      setStudentData(null);
      await AsyncStorage.removeItem("isLoggedIn");
      await AsyncStorage.removeItem("studentData");
    } catch (error) {
      console.error("Error removing data from AsyncStorage:", error);
    }
  };

  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
        if (studentData) {
          await AsyncStorage.setItem(
            "studentData",
            JSON.stringify(studentData)
          );
        }
      } catch (error) {
        console.error("Error saving data in AsyncStorage:", error);
      }
    };

    saveData();
  }, [isLoggedIn, studentData]);

  const authContextValue: AuthContextType = {
    isLoggedIn,
    studentData,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
