import React from 'react'
import Mian from '../Chat/Mian'

const ChatInbox = ({open}) => {
  return (
    <div className='my-8'>
    <Mian open={open} />
    </div>
  )
}

export default ChatInbox