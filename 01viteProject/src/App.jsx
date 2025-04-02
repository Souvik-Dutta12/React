import { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "./components/Card";
import { Sun, Moon } from "lucide-react";

function App() {
  const [counter, setCounter] = useState(15);
  const [color, setColor] = useState("bg-zinc-950");
  const [darkMode, setDarkMode] = useState(true);

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

  return (
    <div className={`min-h-screen ${darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"} transition-all duration-300`}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full ml-[48%] mt-5 bg-zinc-700 text-white"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      <div className="flex flex-col justify-center items-center p-5">

        <h1 className="text-8xl text-center font-bold ">React Series</h1>

        <h2 className="text-center text-4xl mt-10">Counter Value: {counter}</h2>
      </div>


      <div className="flex gap-3 items-center justify-center mt-5 text-xl">
        <button onClick={addValue} className="px-3 py-2 bg-zinc-700 rounded-md cursor-pointer text-white">Add Value</button>
        <button onClick={removeValue} className="px-3 py-2 bg-zinc-700 rounded-md cursor-pointer text-white">Remove Value</button>
      </div>

      <div className="relative flex justify-center gap-8 items-center mt-5">
        <div className="cards flex flex-col gap-5">
          <Card bgChange={color} channel="Animal Planet" src="https://tse4.mm.bing.net/th?id=OIP.GQWtqt7LjIli-UiitXhHtQHaEo&pid=Api&P=0&h=180" />
          <Card bgChange={color} channel="Discovery" src="https://tse2.mm.bing.net/th?id=OIP.pc7t6Iakw3orsliwYxq-lgHaHa&pid=Api&P=0&h=180" />
        </div>

        <div className="absolute top-75 inset-x-0 px-2 flex justify-center">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("#09090b")} className="outline-none cursor-pointer px-4 py-4 rounded-full bg-zinc-950 shadow-lg" />
            <button onClick={() => setColor("#27272a")} className="outline-none cursor-pointer px-4 py-4 rounded-full bg-zinc-800 shadow-lg" />
            <button onClick={() => setColor("#3f3f46")} className="outline-none cursor-pointer px-4 py-4 rounded-full bg-zinc-700 shadow-lg" />
            <button onClick={() => setColor("#1e1b4b")} className="outline-none cursor-pointer px-4 py-4 rounded-full bg-indigo-950 shadow-lg" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
