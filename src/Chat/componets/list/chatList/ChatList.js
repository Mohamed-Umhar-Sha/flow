import React, { useState } from 'react';
import './chatList.css';
import search from '../../../images/search.png';
import plus from '../../../images/plus.png';
import minus from '../../../images/minus.png'
import avatar from '../../../images/avatar.png'
import AddUser from './addUser/AddUser';
const ChatList = ({open}) => {
    const [addMore, setAddMore] = useState(false)
  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src={search} alt="" />
          <input type="text" placeholder='search' />
        </div>
        <img src={addMore ? minus : plus } alt="" className="add" onClick={()=>setAddMore((prev)=>!prev)} />
      </div>
      <div className='item'>
        <img src={avatar} alt="" />
        <div className='texts'>
            <span>Ajay</span>
            <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src={avatar} alt="" />
        <div className='texts'>
            <span>Ajay</span>
            <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src={avatar} alt="" />
        <div className='texts'>
            <span>Ajay</span>
            <p>Hello</p>
        </div>
      </div>
      <div className='item'>
        <img src={avatar} alt="" />
        <div className='texts'>
            <span>Ajay</span>
            <p>Hello</p>
        </div>
      </div>
      {addMore && <AddUser />}
    </div>
  );
};

export default ChatList;
