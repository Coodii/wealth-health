import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import './App.css'
import EmployeesList from "./pages/EmployeesList/EmployeesList";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";

function App() {
  return (
    <div className="app">
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create-employee' element={<CreateEmployee/>}></Route>
          <Route path='/employees-list' element={<EmployeesList/>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
