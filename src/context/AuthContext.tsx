"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { api, ApiError } from "@/lib/api";

interface User {
  username: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check for existing session on initial load
  useEffect(() => {
    const checkUser = async () => {
      try {
        const { user: fetchedUser } = await api.get<{ user: User }>(
          "/api/auth/me",
        );
        if (fetchedUser) {
          setUser(fetchedUser);
        }
      } catch (error) {
        if (error instanceof ApiError && error.status === 401) {
          console.log("No active session.");
        } else {
          console.error("Failed to fetch user on load", error);
        }
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

  const login = async (username: string, password: string) => {
    const { user: loggedInUser } = await api.post<
      { user: User },
      { username: string; password: string }
    >("/api/auth/login", { username, password });
    setUser(loggedInUser);
    router.push("/");
  };

  const logout = async () => {
    await api.post("/api/auth/logout", {});
    setUser(null);
    router.push("/login");
  };

  // TODO register `await api.post('/api/auth/register', { ... });`

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
