import { useState } from "react";
import { createContext, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const loginEmployee = async (inputs) => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/loginEmployee",
      inputs,
      {
        withCredentials: true,
      }
    );
    setCurrentUser(res.data);
  };

  const loginEmployer = async (inputs) => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/loginEmployer",
      inputs,
      {
        withCredentials: true,
      }
    );
    setCurrentUser(res.data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, loginEmployee, loginEmployer }}>
      {children}
    </AuthContext.Provider>
  );
};
