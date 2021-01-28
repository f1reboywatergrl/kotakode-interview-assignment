import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [tasks,setTasks] = useState([
    "Cuci Baju",
    "Masak Nasi"
  ]);
  const [input, setInput] = useState('');
  const handleChange = (tBox) => {
    setInput(tBox.target.value);
  }
  const handleSubmit = () => {
    if (input!==''){
      if (input[0]==='!'){
        setTasks([input,...tasks]);
      }
      else{
        setTasks([...tasks,input]);
      }
      setInput('');      
    }

  }
  return (
    <div className="App">
      <h1>Pekerjaan Rumah Yang Perlu Dilakukan</h1>
      <div>Jika ada pekerjaan yang urgent, tambahkan "!" di awal input.
      </div>
      <div style={{display:'flex',justifyContent:'center',marginBottom:'1%'}}>
        <label htmlFor="inp" className="inp">
          <input value={input} onChange = {handleChange} placeholder="&nbsp;"/>
          <span className="label">Tambah Pekerjaan</span>
          <span className="focus-bg"></span>
        </label>        
      </div>

      
      <button style={{marginLeft:'0.5%'}} className="tambah" onClick={handleSubmit}>Tambah</button>
      <TodoList tasks={tasks} onTasksChange={setTasks} />
    </div>
  );
}

export default App;
