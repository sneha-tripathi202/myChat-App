import React from 'react'

const LoginPage = () => {
  return (
       <div className='w-screen h-screen bg-radial-[at_70%_75%] from-blue-800 via-gray-900 to-black to-90% flex item-center   justify-center '>
      <div className='bg-black/30 my-30 sm:w-100 sm:h-118 shadow-2xl shadow-blue-950 rounded-xl flex flex-col items-center py-6 text-white'>
        <h1 className='text-2xl font-bold py-2'>Welcome back!</h1>
        <h4 className='text-mist-300'>Login to your account</h4>

        <div className='mt-6 mb-4 border-y border-t-gray-700 border-b-gray-500 sm:w-80  '>
          <form action="" className=' my-3 flex flex-col'>
          <input className='bg-white/30 p-2 m-1 rounded placeholder-gray-300' type="text" placeholder='Email' />
          <input className='bg-white/30 p-2 m-1 rounded placeholder-gray-300' type="text" placeholder='Passowrd' />
         <div className='flex justify-between m-3'>
           <div> <input  type="checkbox" />
           <label className="ml-2 text-gray-200">Remember me</label>
</div>
           <h1 className=' text-mist-400 underline'>Forgot Password?</h1>
         </div>
         
          <button className='mt-6 mb-4 p-1 text-[0.7] font-semibold mx-4 rounded sm:w-70 bg-linear-to-l from-blue-700 via-blue-500 to-blue-900'>Sign up</button></form>
        </div>
        
        <div > <h3 className='mb-2 text-mist-100'>Don't have an account? Login</h3></div>
      </div>



    </div>
  )
}

export default LoginPage
