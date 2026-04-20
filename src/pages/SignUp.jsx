import React, { useState } from 'react'
import Header from '../Components/Header'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [conPassword, setconPassword] = useState('')
  const [error, seterror] = useState(false)
  
  const submitHandler=(e)=>{
 e.preventDefault()
   if(!name) alert("Enter name")
   else if(!email) alert("Enter email")
   else if(!password) alert("Enter email")
   else if(!conPassword) alert("Enter conPassword")

    else alert("Form submitted successfully!");
     setName('')
     setpassword('')
     setemail('')
     setconPassword('')
     
  }
  function inputs(e){
    setName(e.target.value)
}
function emails(e){
     setemail(e.target.value)

}function passwords(e){
     setpassword(e.target.value)
  
}function conpasswords(e){
     setconPassword(e.target.value)
  
}
  return (
    <div className='  w-screen h-screen bg-radial-[at_70%_75%] from-blue-800 via-gray-900 to-black to-90% flex flex-col  items-center   justify-center m-0 p-0 '>
     
      <div className=' bg-black/30  w-80 sm:w-120 h-118  sm:h-150 lg:h-130 shadow-2xl shadow-blue-950 rounded-xl flex flex-col items-center py-6 text-white'>
        <h1 className='text-2xl sm:text-4xl font-bold py-2'>Create an Account</h1>
        <h4 className='text-mist-300'>Sign up to get started</h4>

        <div className='mt-6 mb-4 border-y border-t-gray-700 border-b-gray-500 w-70 sm:w-80 lg:w-70  '>
          <form onSubmit={submitHandler} action="" className=' my-3 flex flex-col'>
            <input onChange={(e)=>inputs(e)}value={name} placeholder={error ? "Name is required!" : "Enter your name"} className='${error ? border-red-500 placeholder-red-500" : "border-gray-300 bg-white/30 p-2 sm:p-4 lg:p-2 m-1 mt-2 rounded placeholder-gray-300 ' type="text" placeholder='Full Name' />
          <input onChange={(e)=>emails(e)}value={email} className='bg-white/30 p-2 sm:p-4 lg:p-2 m-1 rounded placeholder-gray-300' type="text" placeholder='Email' />
          <input onChange={(e)=>passwords(e)}value={password} className='bg-white/30 p-2 sm:p-4 lg:p-2 m-1 rounded placeholder-gray-300' type="text" placeholder='Passowrd' />
          <input onChange={(e)=>conpasswords(e)}value={conPassword} className='bg-white/30 p-2 sm:p-4 lg:p-2 m-1 rounded placeholder-gray-300' type="text" placeholder='Confirm Password' />
          <button  className='mt-6 mb-4 p-1 sm:p-2 lg:p-2  text-[0.7] font-semibold mx-4 rounded sm:w-70 lg:w-60 bg-linear-to-l from-blue-700 via-blue-500 to-blue-900'>Sign up</button></form>
        </div>
        
        <div > <h3 className='mb-2 text-mist-100'>Already have an account? Login</h3></div>
      </div>
    </div>
  )
}

export default SignUp
