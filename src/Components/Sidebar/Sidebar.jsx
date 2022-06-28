import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logOutUser } from "../../Redux/user/action";
import "./Sidebar.css";
const Sidebar = () => {
  const navigate = useNavigate();
  var token = JSON.parse(localStorage.getItem("token"));
  var tokenAuth = localStorage.getItem("tokenauthor");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLoginLogout = () => {
    console.log("clicked");
    console.log(token);
    if (token !== null) {
      console.log("clicked");
      localStorage.removeItem("token");
      localStorage.removeItem("tokenauthor");
      dispatch(logOutUser());
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="sidebar">
      <div className="user-details">
        <h2>Hello {token !== null ? tokenAuth : "user"} </h2>
     
      </div>
      <div className="main-nav">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            navigate("/personaltodo");
          }}
        >
          Personal
        </button>
        <button
          onClick={() => {
            navigate("/officialtodo");
          }}
        >
          officilals
        </button>
        
        <button
          onClick={() => {
            navigate("/othortodo");
          }}
        >
          Othors
        </button>
        <button
          onClick={() => {
            navigate("/createtodo");
          }}
        >
          Add Todo
        </button>
      </div>
      <div className="logout-sec">
        <button onClick={handleLoginLogout}>{token !== null ? "LOGOUT" : "LOGIN"}</button>
      </div>
    </div>
  );
};

export default Sidebar;
