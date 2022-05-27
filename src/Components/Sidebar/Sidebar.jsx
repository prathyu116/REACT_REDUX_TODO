import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../../Redux/user/action";
import "./Sidebar.css";
const Sidebar = () => {
    var token = JSON.parse(localStorage.getItem("token"));
    var tokenAuth = localStorage.getItem("tokenauthor");

      const user = useSelector((state) => state.user);
      const dispatch = useDispatch();
      console.log("--", tokenAuth);
  return (
    <div className="sidebar">
      <div className="user-details">
        <h2>Hello {token !== null ? tokenAuth : "user"} </h2>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Register</Link>
      </div>
      <div className="main-nav">
        <button>All</button>
        <button>Personal</button>
        <button>officilals</button>
        <button>Othors</button>
      </div>
      <div className="logout-sec">
        <button
          onClick={() => {
            console.log("clicked");
            localStorage.removeItem("token");
            localStorage.removeItem("tokenauthor");
            dispatch(logOutUser());
          }}
        >
          {token !== null ? "LOGOUT" : "LOGIN"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
