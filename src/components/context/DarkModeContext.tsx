"use client";
import React, { createContext, useState } from "react";

interface AuthContextType {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface DarkProviderProps {
  children: React.ReactNode;
}

const DarkProvider: React.FC<DarkProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const darkInfo: AuthContextType = {
    isDark,
    setIsDark,
  };

  return (
    <AuthContext.Provider value={darkInfo}>{children}</AuthContext.Provider>
  );
};

export default DarkProvider;
