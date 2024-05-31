import React from 'react'
import List from './list/List'
import Chat from './chats/Chat'
import Detail from './detail/Detail'
import Login from './login/Login'
import Notification from './notification/Notification'
const ChatApp = ({ open }) => {
  const user = true;
  return (
    <div className='container'>

      {
        user ? (
          <>
            <List open={open} />
            <Chat />
            <Detail />
          </>
        ) : (
          <Login />
        )
      }

      <Notification />
    </div>
  )
}

export default ChatApp
