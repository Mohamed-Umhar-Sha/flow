import React from 'react'
import avatar from '../../../../images/avatar.png'
import './addUser.css'
const AddUser = () => {
  return (
    <div className='addUser'>
      <form action="">
        <input type="text" placeholder='Username' name="username" />
        <button>Search</button>
      </form>
      <div className='user'>
        <div className='detail'>
          <img src={avatar} alt="" />
          <span className=''>Ajay Kumar</span>
        </div>
        <button className=''>Add User</button>
      </div>
    </div>
  )
}

export default AddUser
