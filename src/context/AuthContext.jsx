import React, { useState, createContext } from "react";

export const AuthContext = createContext({
  usernameAuth: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const login = (userData) => {
    console.log(`fn login`);
    setAuth(userData);
  };
  const logout = () => {
    setAuth(null);
  };

  const valueContext = {
    auth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};
