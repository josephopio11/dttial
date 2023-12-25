import ThemeSwitcher from "@/components/shared/ThemeSwitcher";
import { Separator } from "@/components/ui/separator";
import { SignOutButton, UserButton, UserProfile } from "@clerk/nextjs";
import { Metadata } from "next";
import React from "react";

type NewType = Metadata;

export const metadata: NewType = {
  title: "Dashboard | Dark Theme Switcher",
  description: "Created by Joseph Opio",
};

const Dashboard = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p>This is the Dashboard</p>
      </div>
    </div>
  );
};

export default Dashboard;
