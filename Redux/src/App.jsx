import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className='text-7xl font-bold ml-25 text-white mt-20'>Chai aur React -- 11 Redux Tool Kit --</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
