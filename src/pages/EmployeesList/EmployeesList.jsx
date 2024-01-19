import React from 'react'

import { useSelector } from 'react-redux';
import {selectEmployees}  from '../../utility/employeeSlice';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './employeesList.css';


function EmployeesList() {
    
    const rows = useSelector(selectEmployees);

    const columns = [
      { field: 'firstName', headerName: 'First name'},
      { field: 'lastName', headerName: 'Last name'},
      {
        field: 'startDate',
        headerName: 'Start Date',
      },
      {
        field: 'department',
        headerName: 'Department',

      },
      {
        field: 'birthDate',
        headerName: 'Date of Birth',
      },
      { field: 'street', headerName: 'Street' },
      { field: 'city', headerName: 'City'},
      { field: 'stateAbr', headerName: 'State'},
      { field: 'zipcode', headerName: 'Zip Code'},
    ]
      ;



  return (
    <div>
      <Header/>
      <main className = 'employees_list'>
        <h2 className='employees_list_title'>Employees List</h2>
        <DataGrid className='employees_list_tab'
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          getRowId={(row) => row.employeeId}
          pageSizeOptions={[10, 20]}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </main>
      <Footer/>
    </div>
  )
}

export default EmployeesList