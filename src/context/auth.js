import { createContext, useContext } from "react";
import { auth } from "../config";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  function working() {
    return "working";
  }

  const value = {
    working
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
