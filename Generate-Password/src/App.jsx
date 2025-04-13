import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='text-7xl ml-30 mt-50 text-white'>Chai aur React -- 05 Password Generator --</div>
      <p className='text-xl px-30 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsa consectetur excepturi ratione. Ipsam hic saepe blanditiis veniam text Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum, molestias consequuntur corrupti culpa consectetur tenetur quaerat voluptatem, numquam, repudiandae maiores et. Quod velit ducimus voluptatum explicabo ipsam eos laudantium! obcaecati eum.</p>
      <h1 className='text-gray-400 text-3xl ml-30 mt-5'>Generate Your Own Password</h1>

      <div className="ful flex ">
        <div className="left w-1/3">
          <div className=' mt-5 ml-30 flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label className='text-xl text-white'>Length: <span className='text-blue-500 text-xl'>{length}</span></label>
          </div>
          <div className="mt-3 ml-30 text-xl text-white flex items-center gap-x-2">
            <label htmlFor="numberInput" className="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="numberInput"
                defaultChecked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="peer sr-only"
              />
              <div className="w-5 h-5 rounded-full border-2 border-white peer-checked:bg-blue-500 flex items-center justify-center transition">
                <svg
                  className="w-3 h-3 text-white hidden peer-checked:block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-2">Numbers</span>
            </label>
          </div>

          <div className="flex items-center mt-3 ml-30 gap-x-2 text-white text-xl">
            <label htmlFor="characterInput" className="relative flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="characterInput"
                defaultChecked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="peer sr-only"
              />
              <div className="w-5 h-5 rounded-full border-2 border-white peer-checked:bg-blue-500 flex items-center justify-center transition">
                <svg
                  className="w-3 h-3 text-white hidden peer-checked:block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-2">Characters</span>
            </label>
          </div>
        </div>

        <div className="right relative mt-7 rounded-xl bg-gray-800 w-1/2 h-30 ">

          <textarea
            type="text"
            value={password}
            className=" absolute top-[25%] text-xl outline-none w-full h-20  py-3 px-3 resize-none"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='absolute right-0 outline-none text-xl rounded-tr-xl text-center  bg-gray-700 hover:bg-gray-600 cursor-pointer text-blue-500 px-4 py-1 shrink-0'
          >Copy</button>
        </div>
      </div>



    </>
  )
}

export default App
