"use client";

import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const DarkProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const darkInfo = {
    isDark,
    setIsDark,
  };

  return (
    <AuthContext.Provider value={darkInfo}>{children}</AuthContext.Provider>
  );
};

export default DarkProvider;
