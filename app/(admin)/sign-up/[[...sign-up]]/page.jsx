import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center flex-col gap-10 w-full h-screen">
      <SignUp />
    </div>
  );
}
