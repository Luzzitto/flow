"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import React from "react";

const HomePage = () => {
  const { theme } = useTheme();
  return (
    <div>
      <h1>HomePage</h1>
      <Button>Click me</Button>
      <p>Current theme: {theme}</p>
    </div>
  );
};

export default HomePage;
