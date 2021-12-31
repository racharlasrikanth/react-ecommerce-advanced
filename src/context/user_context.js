import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {

  const { isLoading, isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const [myUser, setMyUser] = useState(null);

  useEffect(()=>{
    setMyUser(user)
  },[user])

  return (
    <UserContext.Provider value={{isAuthenticated, loginWithRedirect, logout, myUser, isLoading}}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
