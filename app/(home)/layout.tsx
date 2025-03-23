import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Header from "./_components/common/Header";

const MainLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isAuthenticated } = await getKindeServerSession(); // Now it's a promise
  //isAuthenticated is no longer a function. It's a boolean value
  if (!isAuthenticated) {
    redirect("/");
  }
  return (
    <div
      className="w-full h-auto min-h-screen
     !bg-[#f8f8f8] dark:!bg-background"
    >
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;