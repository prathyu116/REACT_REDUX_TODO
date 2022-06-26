import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const navigate = useNavigate()
  const [registerData, setRegisterData] = useState([]);
  const handleRegister = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.id]: e.target.value,
    });
  };
  const submitRegister = async () => {
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
      method: "POST",
      body: JSON.stringify(registerData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    console.log(res);
    if (res.error === false) {
      alert(res.message);
    } else {
      
      alert(res.message);
      navigate("/login")
    }
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input onChange={handleRegister} type="text" placeholder="Enter name" id="name" />
      <input onChange={handleRegister} type="text" placeholder="Enter email" id="email" />
      <input onChange={handleRegister} type="text" placeholder="Enter password" id="password" />
      <input onChange={handleRegister} type="text" placeholder="Enter username" id="username" />
      <input onChange={handleRegister} type="text" placeholder="Enter phone number" id="mobile" />
      <input onChange={handleRegister} type="text" placeholder="Enter description" id="description" />
      <button onClick={submitRegister}>Register</button>
      <Link to={"/login"}>Allready have account ?</Link>
    </div>
  );
};

export default Register;
