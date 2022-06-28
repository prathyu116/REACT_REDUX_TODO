import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, getTodos } from "../../Redux/todo/Action";
import "./AddTodo.css";
const AddTodo = () => {
  const dispatch = useDispatch();

  const [formData, setformData] = useState({});
  const [text, setText] = useState("");
  const [radioData, setRadioData] = useState(null);
  const [checkboxData, setcheckboxData] = useState({ personal: false, official: false, othors: false });
  const [subTask, setSubTask] = useState([]);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setformData({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit = () => {
    const payload = {
      ...formData,
      subTask,
      status: radioData,
      type: checkboxData,
    };
    // dispatch(addTodo(payload));
     fetch("http://localhost:8080/todos", {
       body: JSON.stringify(payload),
       headers: {
         "content-type": "application/json",
       },
       method: "POST",
     })
       .then(() => {
         dispatch(getTodos());
        alert("TASK ADDED")
              

       })
       .then(() => {
        setText("");
       });

  };
  const handleAddSubtask = () => {
    
    setSubTask([...subTask, { id: Date.now(), title: text, status: false }]);

  };
  const handleChangeTags = (e) => {
    const { name, checked } = e.target;
    setcheckboxData({ ...checkboxData, [name]: checked });
  };
    console.log(subTask);

  return (
    <>
      <div className="addTodoForm">
        <div className="first">
          <input type="text" placeholder="title" name="task" id="task" onChange={handleChange} />
          <textarea name="description" id="description" cols="20" rows="7" placeholder="Description" onChange={handleChange}></textarea>
          <p>status</p>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="todo" onChange={(e) => setRadioData(e.target.id)} />
            <label class="form-check-label" for="flexRadioDefault1">
              Todo
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="inprogress"
              onChange={(e) => setRadioData(e.target.id)}
            />
            <label class="form-check-label" for="flexRadioDefault2">
              In Progess
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="done" onChange={(e) => setRadioData(e.target.id)} />
            <label class="form-check-label" for="flexRadioDefault3">
              Done
            </label>
          </div>
          <p>Tags</p>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" name="personal" onChange={handleChangeTags} />
            <label class="form-check-label" for="defaultCheck1">
              Personal
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" name="official" id="defaultCheck2" onChange={handleChangeTags} />
            <label class="form-check-label" for="defaultCheck2">
              Official
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" name="othors" id="defaultCheck3" onChange={handleChangeTags} />
            <label class="form-check-label" for="defaultCheck3">
              Othors
            </label>
          </div>
        </div>
        <div className="second">
          <div className="add">
            <input type="text" name="" id="" placeholder="add sub task" onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAddSubtask}>Add</button>
          </div>
          <div >
            {
              subTask.map((itm)=>{
                return (
                  <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                    <li>{itm.title}</li>
                    <button>Del</button>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className="third">
          <input type="date" id="taskdate" name="taskdate" onChange={handleChange} />
          <button onClick={handleSubmit}>ADD NEW TASK</button>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
