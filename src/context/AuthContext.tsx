import React, { createContext, useState } from "react";
const AuthContext: any = createContext("");
function setCookie(c_name: any, value: any, exdays: any) {
  const exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  const c_value =
    escape(value) + (exdays == null ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = c_name + "=" + c_value;
}
export const AuthContextProvider = (props: any) => {
  const [logged, setLogged] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState([]);
  const HandleLogin = (type: any) => {
    setLogged(type);
  };
  const HandleToken = (data: any) => {
    setCookie("token", data, 3);
    setToken(data);
  };
  const HandleUser = (data: any) => {
    setUser(data);
  };
  return (
    <AuthContext.Provider
      value={{
        token,
        logged,
        user,
        HandleLogin,
        HandleToken,
        HandleUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
