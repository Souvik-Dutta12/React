import { useState, useCallback, useEffect, useRef } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "./components/Card";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

function App() {
  const [counter, setCounter] = useState(15);
  const [color, setColor] = useState("bg-zinc-950");
  const [darkMode, setDarkMode] = useState(true);
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const text = "Generate Your Own Password...";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);


  //ref hook
  const passwordRef = useRef(null)
  const fullnameRef = useRef(null)
  const yrRef = useRef(null)


  const notify = () => toast.error('The value cannot be negative!!...', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: darkMode ? "dark" : "light",
    transition: Bounce,
  });

  const addValue = () => setCounter(counter + 1);
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      notify();
    }
  };

  const generatePassword = (name, year, len) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let namePart = name.replace(/\s+/g, "").slice(0, Math.min(4, len)); // Take first 4 chars of name
    let yearPart = year.toString().slice(-2); // Last 2 digits of the year
    let randomPart = "";
    for (let i = 0; i < len - namePart.length - yearPart.length; i++) {
      randomPart += chars[Math.floor(Math.random() * chars.length)];
    }
    return namePart + randomPart + yearPart;
  };

  const copyPasswordToClipboard = useCallback(() => {
    // passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(password)
  }, [password])



  const handleClick = (e) => {
    e.preventDefault();
    const fullname = fullnameRef.current.value;
    const year = yrRef.current.value;
    if (!fullname || !year) {
      alert("Please enter your full name and birth year");
      return;
    }
    setIsGenerating(true);
    setTimeout(() => {
      setPassword(generatePassword(fullname, year, length));
      setIsGenerating(false);
    }, Math.floor(Math.random() * (8000 - 6000 + 1)) + 6000);
  };

  useEffect(() => {
    if (deleting && displayText === "") {
      setIndex(0);
      setDeleting(false);
    }

    if (!deleting && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!deleting && index === text.length) {
      setTimeout(() => setDeleting(true), 5000);
    } else if (deleting && displayText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, displayText, deleting]);
  return (
    <div className={`min-h-screen ${darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"} transition-all duration-300`}>

      {/* dark and light theme */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full ml-[48%] mt-5 bg-zinc-700 text-white"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>





      {/*counter */}
      <div className="flex flex-col justify-center items-center p-5">

        <h1 className="text-8xl text-center font-bold ">React Series</h1>

        <h2 className="text-center text-4xl mt-10">Counter Value: {counter}</h2>
      </div>
      <div className="flex gap-3 items-center justify-center mt-5 text-xl">
        <button onClick={addValue} className="px-3 py-2 bg-zinc-700 rounded-md cursor-pointer text-white">Add Value</button>
        <button onClick={removeValue} className="px-3 py-2 bg-zinc-700 rounded-md cursor-pointer text-white">Remove Value</button>
      </div>





      {/* cards */}
      <div className="relative flex justify-center gap-8 items-center mt-5">
        <div className="cards flex flex-col gap-5">
          <Card bgChange={color} channel="Animal Planet" src="https://tse4.mm.bing.net/th?id=OIP.GQWtqt7LjIli-UiitXhHtQHaEo&pid=Api&P=0&h=180" />
          <Card bgChange={color} channel="Discovery" src="https://tse2.mm.bing.net/th?id=OIP.pc7t6Iakw3orsliwYxq-lgHaHa&pid=Api&P=0&h=180" />
        </div>




        {/* bg changer */}
        <div className="absolute top-75 inset-x-0 px-2 flex justify-center">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("#09090b")} className="outline-none cursor-pointer px-4 py-4 rounded-full bg-zinc-950 shadow-lg" />
            <button onClick={() => setColor("#27272a")} className="outline-none cursor-pointer px-4 py-4 rounded-full bg-zinc-800 shadow-lg" />
            <button onClick={() => setColor("#3f3f46")} className="outline-none cursor-pointer px-4 py-4 rounded-full bg-zinc-700 shadow-lg" />
            <button onClick={() => setColor("#1e1b4b")} className="outline-none cursor-pointer px-4 py-4 rounded-full bg-indigo-950 shadow-lg" />
          </div>
        </div>
      </div>





      {/* Password generator */}
      <h1 className="text-5xl text-center mt-20">
      {displayText}
    </h1>
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 mt-30 mx-20 rounded-xl flex">

        <div className="left p-10 w-1/2  ">
          <form action="" className="flex flex-col gap-3">
            <div>
              <label htmlFor="fullname" className="text-xl">Full Name : </label>
              <input type="text"
                id="fullname"
                ref={fullnameRef}
                className="px-4 py-3 border-b border-purple-600 bg-transparent w-[60%]  outline-none text-white"
                placeholder="Full Name..."
                required
              />
            </div>


            <div>
              <label htmlFor="dob" className="text-xl">Enter your birth year : </label>
              <input type="number"
                id="dob"
                ref={yrRef}
                className="px-4 py-3 border-b border-purple-600 bg-transparent w-[60%] outline-none text-white"
                placeholder="Your birth year..."
                required
              />

            </div>
            <div>
              <label >Length: {length}</label>
              <br />
              <input type="range"
                min={6}
                max={12}
                value={length}
                className="cursor-pointer accent-purple-600"
                onChange={(e) => setLength(Number(e.target.value))} />
            </div>

            <button onClick={handleClick} className="text-xl bg-purple-600 cursor-pointer rounded-full w-1/2 py-2 mt-3 ">Generate...</button>
          </form>
        </div>

        <div className="right p-10 w-1/2 border-l h-72 relative">
        <button className="bg-zinc-800 cursor-pointer px-4 py-2 absolute right-2 top-2 rounded-xl" onClick={copyPasswordToClipboard}>Copy</button>
        {isGenerating ? (
          <h1 className="text-xl">Your password is Cooking right now... Please wait...</h1>
        ) : (
          <h1 className="text-xl mt-2">Your password is : <span className="bg-zinc-700 rounded-md ">{password}</span></h1>
        )}
      </div>


      </div>





      <ToastContainer />
    </div>
  );
}

export default App;
