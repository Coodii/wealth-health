import { createSlice } from '@reduxjs/toolkit';
import { employees } from '../mock/employees';


export const employeesSlice = createSlice({
  name:'employees',
  initialState:{
    employees : employees
  },
  reducers : {
    createEmployee : (state, action) =>
    {
      state.employees.push(action.payload.employee);
    }
  }
}
);

export const {createEmployee} = employeesSlice.actions;
export const selectEmployees = (state) => state.employees;
export default employeesSlice.reducer;

