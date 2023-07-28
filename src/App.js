
import './App.css';
import { useState } from 'react';


function App() {
  const [work, setWork] = useState('')
  const [todos, setTodos] = useState([]);

  const handleAdd = ()=>{
    setTodos(prev=>[work, ...prev])
    setWork('')
  }

  return (
    <div className="flex flex-col gap-8 h-screen justify-center items-center border border-red-500 ">
       <div className="flex gap-8">
          <input
          type='text'
          className='border border-blue-600 outline-none px-2 py-2 w-[400px]'
          value={work}
          onChange={e=>setWork(e.target.value)}
          />
          <button
          type='button'
          className='outline-none bg-blue-700 px-4 py-2 rounded-md text-white'
          onClick={handleAdd}
          >Add</button>
       </div>
       <div>
          <h3 className='font-bold text-2xl'>Content</h3>
          <ul>
            {todos.map((todo, index)=><li key={index}>{todo}</li>)}
          </ul>
       </div>
    </div>
  );
}

export default App;
