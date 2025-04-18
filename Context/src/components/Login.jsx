import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div className='flex flex-col w-1/3 gap-3 font-semibold items-center justify-center mt-10 ml-120'>
        <h2 className='text-4xl text-emerald-500'>Login Here ...</h2>
        <input type='text'
        className='px-5 py-2 w-[70%] mt-7 border-2 text-xl text-slate-400 border-slate-400 rounded-xl focus:border-emerald-500 focus:outline-2'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='Username'  />
        {" "}
        <input type='text'
        className='px-5 py-2 w-[70%] mt-2 border-2 text-xl text-slate-400 border-slate-400 rounded-xl focus:border-emerald-500 focus:outline-2' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='Password'  />
        <button className='bg-blue-500 text-white rounded-xl px-5 cursor-pointer hover:bg-blue-700 duration-700 py-3 w-40' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login