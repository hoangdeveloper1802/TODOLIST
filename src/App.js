
import './App.css';
import { useState } from 'react';


function App() {
  const [work, setWork] = useState('')

  return (
    <div className="flex gap-8 h-screen justify-center items-center border border-red-500 ">
       <input
       type='text'
       className='border border-blue-600 outline-none px-2 py-2 w-[400px]'
       value={work}
       onChange={e=>setWork(e.target.value)}
       />
       <button
       type='button'
       className='outline-none bg-blue-700 px-4 py-2 rounded-md text-white'
       >Add</button>
    </div>
  );
}

export default App;
