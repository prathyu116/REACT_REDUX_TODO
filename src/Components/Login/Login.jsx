import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { addToken, addUser } from "../../Redux/user/action";
import Loading from "../Loading";

import "./Login.css";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({username:"",password:""});
  const [loading, setloading] = useState(false);
  const handleLogin = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const submitLogin = async () => {
    console.log("LOO", loginData);
    if (loginData.username === "" || loginData.password === "") {
      return alert("add required credential");
    }
    setloading(true);

    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    setloading(false);

    if (res.error === false) {
      dispatch(addToken(res.token));
      localStorage.setItem("token", JSON.stringify(res.token));
      getUser(loginData.username, res.token);
      alert("LOGINED SUCCUSFULL");
      navigate("/");
    } else {
      alert(res.message);
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

      let data = await res.json();
      localStorage.setItem("tokenauthor", data.name);
      dispatch(addUser(data.name));
      console.log("USER", data.name);
    } catch (error) {
      console.log(error);
    }
  };
  return !loading ? (
    <div className="login-From">
      <h1>Login</h1>
      <input onChange={handleLogin} id="username" type="text" placeholder="qwe" required/>
      <input onChange={handleLogin} id="password" type="text" placeholder="123" required/>
      <button onClick={submitLogin}>Login</button>
      <Link to={"/signup"}>create new account</Link>
    </div>
  ) : (
    <Loading />
  );
};

export default Login;
