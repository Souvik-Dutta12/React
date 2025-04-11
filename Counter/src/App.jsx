import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter(prevCounter => prevCounter + 1) 
  }

  const removeValue = () => {
    if( counter !== 0){
      setCounter(counter - 1)
    }

  }
  
  return (
    <>
      <h1 className='text-7xl text-white ml-70 mt-50'>Chai aur react -- 02 Counter --</h1>
      <p className='text-xl mt-5 px-70'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam placeat officiis rerum deserunt, corrupti omnis maiores voluptatem. Asperiores porro, veniam neque aliquam minima id atque labore fugiat, deleniti alias sequi!</p>
      <h2 className='text-3xl text-gray-400 mt-10 ml-70'>Counter value: {counter}</h2>

      <div className="btns flex gap-5">
      <button
      className='px-5 py-3 rounded-full bg-blue-500 text-white mt-5 ml-70 text-xl cursor-pointer hover:bg-blue-600'
      onClick={addValue}
      >Add value</button> 
      <button
      className='px-5 py-3 rounded-full bg-white text-gray-900 mt-5 text-xl cursor-pointer hover:bg-slate-300'
      onClick={removeValue}
      >Remove value</button>
      </div>
    </>
  )
}

export default App
