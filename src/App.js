import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import { Route, Routes } from "react-router-dom";
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';

function App() {

  return (
    <div className='main-container'>
      <div className="left">
        <Sidebar />
      </div>
      <div className='right'>
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
