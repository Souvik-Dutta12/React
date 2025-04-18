import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div className='ml-170 text-slate-400 font-semibold  mt-10 text-xl '>Please login</div>

    return <div className='ml-170 text-slate-400 font-semibold  mt-10 text-xl '>Welcome {user.username}</div>
}

export default Profile