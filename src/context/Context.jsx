import React, { createContext, useContext, useState } from 'react'

export const contextTheme=createContext(null)
const Context = (props) => {
  const [userName, setuserName] = useState()
  return (
    <div>
      <contextTheme.Provider value={[userName,setuserName]}>{props.children}</contextTheme.Provider>
    </div>
  )
}

export default Context
