import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../Redux/todo/Action';
  var token = JSON.parse(localStorage.getItem("token"));
  var tokenAuth = localStorage.getItem("tokenauthor");
const AllTodo = () => {
    const dispatch = useDispatch();

    const state = useSelector((store) => store.todo.todos);
    console.log("dd",state);
     useEffect(() => {
       dispatch(getTodos());
     }, []);

     var personal = state.filter((itm)=>{
      return itm.type.personal === true;
     })
     var official = state.filter((itm)=>{
      return itm.type.official === true;
     })
     var othors = state.filter((itm) => {
       return itm.type.othors === true;
     });
     

  return (
    <div>
      <div className="all-todo">

      </div>
      
    </div>
  )
}

export default AllTodo