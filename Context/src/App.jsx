import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (

    <UserContextProvider>
      <div className='text-7xl mt-15 ml-40 text-white font-bold'>Chai aur React -- 08 Context API --</div>

      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
