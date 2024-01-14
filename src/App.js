import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import './App.css'
import EmployeesList from "./pages/EmployeesList/EmployeesList";

function App() {
  return (
    <div className="app">
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/employeesList' element={<EmployeesList/>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
