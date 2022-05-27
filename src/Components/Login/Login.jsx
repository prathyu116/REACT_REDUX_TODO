import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToken, addUser } from "../../Redux/user/action";

import "./Login.css";
const Login = () => {
      const dispatch = useDispatch();

  const [loginData, setLoginData] = useState([]);
  const handleLogin = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };
  const submitLogin = async () => {
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    console.log(res);
    if (res.error === false) {
        dispatch(addToken(res.token));
        localStorage.setItem("token",JSON.stringify(res.token))
        getUser(loginData.username, res.token);
      alert("LOGINED SUCCUSFULL");

    } else {
      alert("LOGIN FAILED");
    }
  };
     let getUser = async (username, token) => {
       try {
         let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
           headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${token}`,
           },
         });

         let data = await res.json()
                 localStorage.setItem("tokenauthor", data.name);

         dispatch(addUser(data.name));
         console.log("USER", data.name);
       } catch (error) {
         console.log(error);
       }
     };
  return (
    <div className="login-From">
      <h1>Login</h1>
      <input onChange={handleLogin} id="username" type="text" placeholder="Enter username" />
      <input onChange={handleLogin} id="password" type="text" placeholder="Enter password" />
      <button onClick={submitLogin}>Login</button>
    </div>
  );
};

export default Login;
