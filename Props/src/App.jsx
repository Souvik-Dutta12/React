import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='text-7xl text-white mt-40 ml-70'>Chai aur React -- 03 Props --</h1>
      <div className="cards flex gap-4 mt-10 ml-70 flex-wrap">
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" />    
      </div>
    </>
  )
}

export default App
