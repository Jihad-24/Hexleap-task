"use client";
import NavBar from "@/components/NavBar/NavBar";
import Collection from "../components/collection/page";
import Sports from "../components/sports/page";
import { useContext } from "react";
import { AuthContext } from "@/components/context/DarkModeContext";

export default function Home() {
  const { isDark } = useContext(AuthContext);
  return (
    <div
      className={` ${isDark ? "bg-[#292B32] text-white" : "bg-[#F7F7F8] text-black"}`}
    >
      <div className="pb-16 pt-5 max-w-6xl mx-auto">
        <NavBar></NavBar>
        <Sports></Sports>
        <Collection></Collection>
      </div>
    </div>
  );
}
