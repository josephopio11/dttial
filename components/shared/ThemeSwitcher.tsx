"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border">
        {theme !== "light" && (
          <>
            <TabsTrigger value="light" onClick={() => setTheme("light")}>
              <SunIcon className="h-6 w-6" />
            </TabsTrigger>
          </>
        )}
        {theme === "light" && (
          <>
            {" "}
            <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
              <MoonIcon className="h-6 w-6 rotate-90 transision-all dark:rotate-0" />
            </TabsTrigger>
          </>
        )}

        <TabsTrigger value="system" onClick={() => setTheme("system")}>
          <DesktopIcon className="h-6 w-6" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ThemeSwitcher;
