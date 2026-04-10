import React from 'react'

const SignUp = () => {
  return (
    <div className='  w-screen h-screen bg-radial-[at_70%_75%] from-blue-800 via-gray-900 to-black to-90% flex  items-center   justify-center m-0 p-0 '>
      <div className=' bg-black/30  w-80 sm:w-120 h-118  sm:h-150 shadow-2xl shadow-blue-950 rounded-xl flex flex-col items-center py-6 text-white'>
        <h1 className='text-2xl sm:text-4xl font-bold py-2'>Create an Account</h1>
        <h4 className='text-mist-300'>Sign up to get started</h4>

        <div className='mt-6 mb-4 border-y border-t-gray-700 border-b-gray-500 w-70 sm:w-80  '>
          <form action="" className=' my-3 flex flex-col'>
            <input className='bg-white/30 p-2 sm:p-4 m-1 mt-2 rounded placeholder-gray-300 ' type="text" placeholder='Full Name' />
          <input className='bg-white/30 p-2 sm:p-4 m-1 rounded placeholder-gray-300' type="text" placeholder='Email' />
          <input className='bg-white/30 p-2 sm:p-4 m-1 rounded placeholder-gray-300' type="text" placeholder='Passowrd' />
          <input className='bg-white/30 p-2 sm:p-4 m-1 rounded placeholder-gray-300' type="text" placeholder='Confirm Password' />
          <button className='mt-6 mb-4 p-1 sm:p-2 text-[0.7] font-semibold mx-4 rounded sm:w-70 bg-linear-to-l from-blue-700 via-blue-500 to-blue-900'>Sign up</button></form>
        </div>
        
        <div > <h3 className='mb-2 text-mist-100'>Already have an account? Login</h3></div>
      </div>
    </div>
  )
}

export default SignUp
