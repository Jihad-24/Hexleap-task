"use client";
import { useContext } from "react";
import { AuthContext } from "../context/DarkModeContext";

const NavBar = () => {
  const { isDark, setIsDark } = useContext(AuthContext);

  const handleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav
      className={`flex items-center justify-center ${
        isDark ? "bg-black " : "bg-white"
      }  px-4 py-2`}
    >
      <div onClick={handleTheme} className={`btn cursor-pointer  hover:bg-sky-600 ${isDark ? 'text-white' : 'text-black'} px-6 py-2 rounded-full`}>
        {isDark ? "Light Theme" : "Dark Theme"}
      </div>
    </nav>
  );
};

export default NavBar;
