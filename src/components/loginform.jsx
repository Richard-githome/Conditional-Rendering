import React from "react";
import LoginButton from "./loginbutton";
import LoginUserDetails from "./loginusername";

export default function LoginFunction() {
  return (
    <form className="form">
      <LoginUserDetails type="text" placeholder="Username" />
      <LoginUserDetails type="password" placeholder="password" />
      <LoginButton />
    </form>
  );
}
