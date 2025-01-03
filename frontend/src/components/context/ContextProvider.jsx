import React, { useState } from 'react'
import UserContext from './context';

const ContextProvider = ({children}) => {
    const [toogle,setToogle] = useState(false);
  return (
    <UserContext.Provider value={{toogle,setToogle}}>
        {children}
    </UserContext.Provider> 
  )
}

export default ContextProvider