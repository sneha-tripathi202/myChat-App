import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import SignUp from './pages/SignUp.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Chatpage from './pages/Chatpage.jsx'
import Context from './context/Context.jsx'
const router=createBrowserRouter([
  {path:"/",
   element:<Layout/>,
   children:[
    {path:"/",
      element:<SignUp/>
    },
    {path:"/login",
      element:<LoginPage/>
    },
    {path:"/chat",
      element:<Chatpage/>
    },
  ]
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
<Context>
    <RouterProvider router={router}/>
</Context>
  </StrictMode>,
)
