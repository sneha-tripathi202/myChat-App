import React from 'react'
import AddMember from '../Components/AddMember'

const Member = () => {
  return (
   <> <div className='w-screen h-screen bg-linear-to-r from-gray-950  to-gray-900'>
      <div className='w-full h-70  flex flex-col justify-center gap-6 items-center'> <div className='bg-blue-300 w-30 h-30 relative  rounded-full'></div><h1 className='text-[#ffffff] font-semibold text-2xl '>Sneha Sharma<h1 className='text-[#ffffff] font-medium text-sm text-center '>Online</h1></h1>
       </div>
      <div className='w-full   bg-linear-to-l from-gray-900  via-[#0f193b] to-gray-850 bg- h-10 shadow-t-2xl border-t-2 border-gray-700 shadow-gray-700'><h1 className='text-[#ffffff]  font-medium text-lg p-2 pl-10 '>Chats</h1></div>
     
      <div className='w-full  bg-linear-to-l from-[#0b1331]  via-gray-800 to-[#070f2b] bg- h-130 shadow-3xl shadow-black'>
       <AddMember/>
      </div>
    </div></>
  )
}

export default Member
