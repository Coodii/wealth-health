import { createSlice } from '@reduxjs/toolkit';


export const employeesSlice = createSlice({
  name:'employees',
  initialState:{
    employees : []
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

