import React from 'react'
import './userinfo.css'
import more from '../../../images/more.png'
import video from '../../../images/video.png'
import edit from '../../../images/edit.png'
import avatar from '../../../images/avatar.png'
const UserInfo = ({open}) => {
  return (
    <div className='userInfo'>
      <div className="user">
        <img src={avatar} alt="" />
        <h2>Arun Kumar</h2>
      </div>
      <div className="icons flex">
        <img src={more} alt="" />
        <img src={video} alt="" />
        <img src={edit} alt="" />
      </div>
    </div>
  )
}

export default UserInfo
