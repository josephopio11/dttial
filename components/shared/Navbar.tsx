import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="p-10 max-w-[1400px] mx-auto">
      <div className="flex flex-row justify-between">
        <h3 className="text-xl font-bold uppercase">Dashboard</h3>
        <div className="flex flex-row gap-4">
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
