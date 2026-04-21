import React, { useContext } from 'react'
import ChatBox from './ChatBox'
import BubbleIn from './BubbleIn'
import BubbleOut from './BubbleOut'
import { useLocation } from 'react-router-dom'
import { contextTheme } from '../context/Context'

const Chatbublesdashboard = () => {
 const {userName}=useContext(contextTheme)
 console.log(userName);
 
 
 
  return (
    <div className='w-screen h-screen bg-linear-to-r from-gray-950  to-gray-900 backgro '>
     <div className=' h-full flex flex-col justify-between' >
       <div className='w-full h-20 shadow-2xl shadow-gray-950 bg-black/70 flex text-amber-50  '><img className='w-15 h-15 bg-amber-300 rounded-4xl m-3' src="" alt="memberimg" />
       <div className='flex gap-50'>
        <div><h1 className='font-bold mt-4 text-xl'></h1>
       <h4 className='text-mist-300'>online</h4></div>
       <div> <div className='gap-1'>
        <div className=' rounded-4xl w-1 h-1 bg-amber-50 mt-8'></div>
        <div className=' rounded-4xl w-1 h-1 bg-amber-50 mt-1'></div>
        <div className=' rounded-4xl w-1 h-1 bg-amber-50 mt-1'></div>
        </div>
        </div>
       </div>
       </div>
       <div><BubbleIn/></div>
       <div><BubbleOut/></div>
      <div> <ChatBox/></div>
      </div> 
    </div>
  )
}

export default Chatbublesdashboard
