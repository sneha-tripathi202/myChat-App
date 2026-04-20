import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SignUp from './pages/SignUp'
import LoginPage from './pages/LoginPage'
import Chatpage from './pages/Chatpage'
import Member from './pages/Member'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
 <Header/>
<SignUp/>
{/* <LoginPage/> */}
{/* <Member/>           */}
{/* <Chatpage/> */}
    </>
  )
}

export default App
