"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";

interface User {
  username: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (userData: User) => void;
  logout: () => void;
  register: (userData: User, password: string) => boolean; // Added register logic here for simplicity
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the key for storing users in localStorage
const LOCAL_STORAGE_USERS_KEY = "gk_users";
// Define the key for storing the currently logged-in user
const LOCAL_STORAGE_SESSION_KEY = "gk_loggedInUser";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Start loading until initial check is done
  const router = useRouter();

  // Check localStorage for existing session on initial load
  useEffect(() => {
    try {
      const loggedInUserJson = localStorage.getItem(LOCAL_STORAGE_SESSION_KEY);
      if (loggedInUserJson) {
        const loggedInUser = JSON.parse(loggedInUserJson);
        setUser(loggedInUser);
      }
    } catch (error) {
      console.error("Failed to parse logged in user from localStorage", error);
      localStorage.removeItem(LOCAL_STORAGE_SESSION_KEY); // Clear corrupted data
    } finally {
      setLoading(false); // Finished initial check
    }
  }, []); // Empty dependency array means this runs once on mount

  const getStoredUsers = (): (User & { password: string })[] => {
    try {
      const usersJson = localStorage.getItem(LOCAL_STORAGE_USERS_KEY);
      return usersJson ? JSON.parse(usersJson) : [];
    } catch (error) {
      console.error("Failed to parse users from localStorage", error);
      return [];
    }
  };

  const storeUsers = (users: (User & { password: string })[]) => {
    try {
      localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(users));
    } catch (error) {
      console.error("Failed to save users to localStorage", error);
    }
  };

  const register = (userData: User, password: string): boolean => {
    const users = getStoredUsers();
    const userExists = users.some((u) => u.username === userData.username);

    if (userExists) {
      alert("Username already exists!");
      return false;
    }

    // !!! INSECURE: Storing plain text password !!!
    const newUser = { ...userData, password: password };
    const updatedUsers = [...users, newUser];
    storeUsers(updatedUsers);
    console.log("User registered (in localStorage):", userData.username);
    return true;
  };

  const login = (loginUser: User) => {
    // Store user data in localStorage to simulate session persistence
    try {
      localStorage.setItem(
        LOCAL_STORAGE_SESSION_KEY,
        JSON.stringify(loginUser),
      );
      setUser(loginUser);
      console.log("User logged in (in localStorage):", loginUser.username);
    } catch (error) {
      console.error("Failed to save logged in user to localStorage", error);
    }
  };

  const logout = () => {
    // Remove user data from localStorage
    try {
      localStorage.removeItem(LOCAL_STORAGE_SESSION_KEY);
      setUser(null);
      console.log("User logged out (localStorage cleared)");
      // Optional: Redirect to login page after logout
      router.push("/login");
    } catch (error) {
      console.error("Failed to remove logged in user from localStorage", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
