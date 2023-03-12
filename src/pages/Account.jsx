import React from "react";
import { SafeAreaView } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
import useAuth from "../hooks/useAuth";

const Account = () => {
  const { auth } = useAuth();

  return <SafeAreaView>{auth ? <UserData /> : <LoginForm />}</SafeAreaView>;
};

export default Account;
