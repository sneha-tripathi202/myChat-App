import React from 'react'

const ChatBox = () => {
  return (
    <div className='w-full p-3 h-20 shadow-2xl shadow-gray-950 bg-black/70 flex text-amber-50  '>
      <div className='mt-3  '>😊</div>
      <div className='mt-3 ml-3 '>D</div>
      <div><input className='bg-white/10 p-2 mt-3 ml-4 rounded w-54 placeholder-gray-300' type="text" placeholder='Type a message... mic' /></div>
      <div><button className='mt-4  p-1 text-[0.7] font-semibold mx-2 rounded w-15 bg-linear-to-l from-blue-700 via-blue-500 to-blue-900'> Send</button></div>
    </div>
  )
}

export default ChatBox
