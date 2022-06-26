import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import AllTodo from "./Components/AllTodo/AllTodo";
import AddTodo from "./Components/AddTodo/AddTodo";
import PrivateRoute from "./Components/PrivateRoute";
import ProfessionalTodo from "./Components/ProfessionalTodo/ProfessionalTodo";
import PersonalTodo from "./Components/PersonalTodo/PersonalTodo";
import OthorsTodo from "./Components/OthorsTodo/OthorsTodo";
import OfficalTodo from "./Components/OfficalTodo/OfficalTodo";

function App() {
  return (
    <div className="main-container">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Routes>
          <Route path="/" element={<AllTodo />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profsionaltodo" element={<ProfessionalTodo />} />
          <Route path="/personaltodo" element={<PersonalTodo />} />
          <Route path="/othortodo" element={<OthorsTodo />} />
          <Route path="/officialtodo" element={<OfficalTodo />} />
          <Route
            path="/createtodo"
            element={
              <PrivateRoute>
                <AddTodo />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
