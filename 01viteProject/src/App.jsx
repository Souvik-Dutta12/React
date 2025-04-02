import { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "./components/Card";

function App() {
  let [counter, setCounter] = useState(15);

  const notify = () => toast.error('The value cannot be negative!!...', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      notify();
    }
  };



  return (
    <>
      <h1 className="text-8xl text-center mt-30">React Series</h1>
      <h2 className="text-center text-4xl mt-10">Counter Value : {counter}</h2>

      <div className="btn flex gap-3 items-center justify-center mt-5 text-xl ">
        <button onClick={addValue} className="px-3 py-2 bg-zinc-700 rounded-md cursor-pointer text-white">Add Value</button>
        <button onClick={removeValue} className="px-3 py-2 bg-zinc-700 rounded-md cursor-pointer text-white">Remove Value</button>
      </div>

      <Card channel="Animal Planet" src="https://tse4.mm.bing.net/th?id=OIP.GQWtqt7LjIli-UiitXhHtQHaEo&pid=Api&P=0&h=180"/>
      <Card channel="Discovery" src="https://tse2.mm.bing.net/th?id=OIP.pc7t6Iakw3orsliwYxq-lgHaHa&pid=Api&P=0&h=180"/>


      
      
      <ToastContainer />
    </>
  );
}

export default App;
