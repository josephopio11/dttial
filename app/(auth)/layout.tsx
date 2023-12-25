import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-violet-200/40">
      {children}
    </div>
  );
};

export default AuthLayout;
