import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../utility/employeeSlice"

export default configureStore({
    reducer: employeesReducer

})