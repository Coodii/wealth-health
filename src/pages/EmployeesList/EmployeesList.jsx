import React from 'react'

import { useSelector } from 'react-redux';
import {selectEmployees}  from '../../utility/employeeSlice';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';


function EmployeesList() {
    
    const rows = useSelector(selectEmployees);
    const navigate = useNavigate();

    function routeChange (){  
      navigate('/');
    }

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
      { field: 'state', headerName: 'State'},
      { field: 'zipcode', headerName: 'Zip Code'},
    ]
      ;

  


  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 2 },
          },
        }}
        getRowId={(row) => row.firstName}
        pageSizeOptions={[2, 10]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
      <button className="save" onClick={routeChange}>Create Employee</button>
    </div>
  )
}

export default EmployeesList