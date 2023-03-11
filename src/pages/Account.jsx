import React from "react";
import { SafeAreaView } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";

const Account = () => {
  const auth = null;

  return <SafeAreaView>{auth ? <UserData /> : <LoginForm />}</SafeAreaView>;
};

export default Account;
