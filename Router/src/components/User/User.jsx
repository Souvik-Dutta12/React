import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='h-[24.5vw] mx-20 text-center flex items-center justify-center bg-gray-900 text-white text-5xl p-4'>User: <span className='text-slate-400'>{userid}</span></div>
  )
}

export default User