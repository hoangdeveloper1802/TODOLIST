
import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [work, setWork] = useState('')
  const [todos, setTodos] = useState([]);

  const handleAdd = ()=>{
    if(todos.some(item=>item===work)){
      toast.warn('Công việc đã được thêm vào')
    }else{
      setTodos(prev=>[work, ...prev])
      setWork('')
    }
  }

  const handleDelete = (index)=>{
    setTodos(todos.splice(index+1,1));
  }

  return (
    <>
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
            {todos.map((todo, index)=>
            <li key={index}>
              <span>{todo}</span>
              <button
              type='button'
              className='outline-none bg-red-700 px-4 py-2 ml-2 rounded-md text-white'
              onClick={()=>handleDelete(index)}
              >X</button>
            </li>
            )}
          </ul>
       </div>
    </div>
      <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    {/* Same as */}
    <ToastContainer />
    </>
  );
}

export default App;
