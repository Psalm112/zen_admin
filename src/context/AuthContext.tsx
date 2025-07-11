

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { jwtDecode } from "jwt-decode";
import { UserProfile } from "../utils/types";

interface JwtPayload {
  sub: string;
  email: string;
  name?: string;
  exp: number;
  id?: string;
  walletAddress?: string;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (provider: string) => void;
  handleUserUpdate: (userData: any) => void;
  handleAuthCallback: (token: string, userData: any) => void;
  logout: () => void;
  getToken: () => string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const storage = localStorage;
const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = storage.getItem(TOKEN_KEY);
        const storedUser = storage.getItem(USER_KEY);

        if (token && storedUser) {
          // Verify token hasn't expired
          try {
            const decoded = jwtDecode<JwtPayload>(token);
            const currentTime = Date.now() / 1000;

            if (decoded.exp < currentTime) {
              clearAuthState();
              // console.log("Token expired, clearing auth state");
            } else {
              const parsedUser = JSON.parse(storedUser);
              setUser(parsedUser);
             
            }
          } catch (error) {
            console.error("Invalid token:", error);
            clearAuthState();
          }
        } else {
          // console.log("No token or user found in storage");
        }
      } catch (error) {
        // console.error("Error checking auth status:", error);
        clearAuthState();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const clearAuthState = () => {
    storage.removeItem(TOKEN_KEY);
    storage.removeItem(USER_KEY);
    setUser(null);
  };

  const login = (provider: string) => {
    const API_URL = import.meta.env.VITE_API_URL;

    if (provider === "google") {

      const redirectUrl = `${API_URL}/auth/google`;
      window.location.href = redirectUrl;
    }
  };


  const handleAuthCallback = (token: string, userData: UserProfile) => {
    try {
      // Store authentication data
      storage.setItem(TOKEN_KEY, token);
      storage.setItem(USER_KEY, JSON.stringify(userData));

      setUser(userData);
    } catch (error) {
      console.error("Error in handleAuthCallback:", error);
      clearAuthState();
    }
  };

  const handleUserUpdate = (userData: UserProfile) => {
    try {
      storage.setItem(USER_KEY, JSON.stringify(userData));

      setUser(userData);
    } catch (error) {
      console.error("Error in handleUserUpdate:", error);
    }
  };

  const logout = () => {
    // console.log("Logging out");
    clearAuthState();
  };

  const getToken = (): string | null => {
    return storage.getItem(TOKEN_KEY);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    handleAuthCallback,
    handleUserUpdate,
    logout,
    getToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
