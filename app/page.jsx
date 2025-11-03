"use client";
import React from "react";
import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect";

const page = () => {
  return (
    <div
      className="h-screen bg-black w-full dark:border dark:border-white/10  relative overflow-clip"
    >
      <GoogleGeminiEffect />
    </div>
  );
}

export default page