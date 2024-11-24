import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="flex p-5 items-center justify-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
