import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a className='text-gray-900 text-xl' href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',

)

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <App/>
    <div className='text-2xl text-gray-400 ml-50 mt-5'>{anotherUser}</div>
    <p className='text-xl text-emerald-500 px-50 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis vel cum blanditiis amet aspernatur rerum! Voluptate, quis ipsum possimus laudantium beatae earum unde sed commodi illum esse nam. Cumque labore ducimus minus illum quis doloribus fuga tempore sequi dolorum.</p>
    <div className="btns flex gap-5">
    <button className='px-5 py-4 rounded-full bg-blue-500 text-white mt-5 ml-50 text-xl cursor-pointer hover:bg-blue-600 '>
    {reactElement}
    </button>
    <button className='px-5 py-4 rounded-full bg-white text-gray-900 mt-5 text-xl cursor-pointer hover:bg-gray-400'>
    {anotherElement}
    </button>
    </div>
    </>
)


