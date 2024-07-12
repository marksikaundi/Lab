import { SignIn } from "@clerk/nextjs";
import React from "react";
import SignInHandler from "@/components/SignInHandler";


export default function SignInPage() {
  return (
    <div className="flex justify-center items-center flex-col gap-10 w-full h-screen">
      <SignIn />
    </div>
  );
}
