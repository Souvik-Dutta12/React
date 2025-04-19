import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border-2 border-gray-700 focus:border-blue-500 rounded-l-xl px-3 outline-none duration-150 bg-transparent text-xl text-slate-400 py-2"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-xl px-3 py-2 text-xl font-semibold bg-blue-500 hover:bg-blue-700 duration-700 cursor-pointer text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;