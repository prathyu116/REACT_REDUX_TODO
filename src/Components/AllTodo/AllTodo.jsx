import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOfficialTodo, getOthorsTodo, getPersonalTodos, getTodos } from "../../Redux/todo/Action";
import "./AllTodo.css";
var token = JSON.parse(localStorage.getItem("token"));
var tokenAuth = localStorage.getItem("tokenauthor");
const AllTodo = () => {
  const dispatch = useDispatch();

  const state = useSelector((store) => store.todo.todos);
  const personal = useSelector((store) => store.todo.personalTodo);
  const official = useSelector((store) => store.todo.officialTodo);
  const othors = useSelector((store) => store.todo.othorsTodo);
  console.log("dd", othors);
  useEffect(() => {
    if (state.length === 0) {
      dispatch(getTodos());
    }
      dispatch(getPersonalTodos());
      dispatch(getOfficialTodo());
      dispatch(getOthorsTodo());
  }, [state]);
  // let personal = state.filter((itm) => {
  //   return itm.type.personal === true;
  // });

  // let official = state.filter((itm) => {
  //   return itm.type.official === true;
  // });
  // let othors = state.filter((itm) => {
  //   return itm.type.othors === true;
  // });

  return (
    <div>
      <div className="all-todo">
        <div>All( {state.length} )</div>
        <div>Personal( {personal.length} )</div>
        <div>Official( {official.length} )</div>
        <div>Othors( {othors.length} )</div>
      </div>
    </div>
  );
};

export default AllTodo;
