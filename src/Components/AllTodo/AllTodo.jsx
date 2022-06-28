import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../Redux/todo/Action';
  var token = JSON.parse(localStorage.getItem("token"));
  var tokenAuth = localStorage.getItem("tokenauthor");
const AllTodo = () => {
    const dispatch = useDispatch();

    const state = useSelector((store) => store.todo.todos);
    console.log(state.task);
     useEffect(() => {
       dispatch(getTodos());
     }, []);

  return (
    <h3>AllTodo</h3>
  )
}

export default AllTodo