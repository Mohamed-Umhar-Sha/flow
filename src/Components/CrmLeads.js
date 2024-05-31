
import React, { useEffect, useState } from 'react'
import './style.css'

import MUIDataTable from "mui-datatables";






const CrmLeads = () => {
const [users, setUsers] = useState([])

  const columns = [
    {
      name : "images",
      lable : "profile",
    },
    {name : "age"},
    {
      name: "gender",
      options : {
        customBodyRender: (value)=> (
          <p className='capitalize'>
            {value}
          </p>
        )
      }
  },
  ];


  useEffect(()=>{
    
fetch('https://dummyjson.com/users')
.then(res => res.json())
.then((data) => setUsers(data?.users))
            
  }, [])
  
  const options = {
    selectableRows: false,
    elevation : 0,
    rowsPerPage : 5,
    rowsPerPageOptions : [5, 10, 25, 30]
  };
  
  // const getMuiTheme = ()=>
  //   createTheme({
  //     typography :{
  //       fontFamily : "Poppins",
  //     },
  //     components : {
  //       MuiTableCell : {
  //         styleOverrides: {
  //           head : {
  //                 padding: "10px 4px"
  //           },
  //           body:{
  //               padding: "7px 15px",
  //               color: "#e2e8f0"
  //           }
  //         }
  //       }
  //     }
  //   })


  return (
    <div className="bg-white">
      <div>
        <div className={`bg-white  mb-4  rounded-lg px-5 py-3`}>
          <div className={`flex  justify-between items-center  text-lg font-bold`}>
            <h2>Contacts Managament</h2>
            <button className="flex gap-x-1  group  py-2.5 px-3.5 items-center  rounded-full hover:bg-[--second]  border-[--second] ">
              <span className="text-sm text-[--second] group-hover:text-white">EXPORT</span>
            </button>
          </div>
        </div>
        <div className="relative  shadow-md sm:rounded-lg">


        </div>

      </div>

      <div className='bg-slate-100 py-10 min-h-screen grid place-items-center'>
        <div className='w-10/12 max-w-4xl'>
          
          <MUIDataTable
            title={"usres List"}
            data={users}
            columns={columns}
            options={options}
          />
        </div>
      </div>



    </div>

  )
}

export default CrmLeads

