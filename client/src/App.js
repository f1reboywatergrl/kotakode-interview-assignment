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
    setTasks([...tasks,input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Pekerjaan Rumah Yang Perlu Dilakukan</h1>
      <input value={input} onChange = {handleChange} />
      <button style={{marginLeft:'0.5%'}} onClick={handleSubmit}>Tambah</button>
      <TodoList tasks={tasks} onTasksChange={setTasks} />
    </div>
  );
}

export default App;
