


Todo Task

App.jsx:


import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const addTask = () => {
    if (taskName.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        name: taskName,
        description: taskDescription,
        status: 'not completed',
      };
      setTasks([...tasks, newTask]);
      setTaskName('');
      setTaskDescription('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const updateStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const filterTasks = () => {
    switch (filterStatus) {
      case 'completed':
        return tasks.filter((task) => task.status === 'completed');
      case 'not completed':
        return tasks.filter((task) => task.status === 'not completed');
      default:
        return tasks;
    }
  };

  return (
    <div style={{backgroundColor:'white',marginLeft:'300px'}}>
      <div style={{marginRight:'100px',}}>
        <h3 style={{color:'green',textAlign:'center',paddingTop:'100px', marginLeft:'100px'}}>My Todo</h3>
        <label style={{color:'green',margin:'100px',marginRight:'50px',}}>Task Name:</label>
        <input
        style={{backgroundColor:'white',justifyContent:'center',color:'black',border:'1px solid green',borderRadius:'5px'}}
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <label style={{color:'green',margin:'100px',marginRight:'50px',marginTop:'50px',}}>Task Description:</label>
        <textarea
        style={{backgroundColor:'white',marginTop:'100px',border:'1px solid green',borderRadius:'5px',color:'black'}}
          placeholder="Enter task description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      <button onClick={addTask} style={{backgroundColor:'green',marginLeft:'730px',marginTop:'50px'}}>Add Task</button>

      <div>
        <h2 style={{color:'black',margin:'40px'}}>My Todos</h2>
        <label style={{color:'green', marginLeft:'700px'}}>Status Filter : </label>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} style={{marginTop:'20px',marginBottom:'20px',backgroundColor:'red'}}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
      </div>

      {filterTasks().map((task) => (
        <div key={task.id} style={{ border: '1px solid black', padding: '10px', margin: '10px',color:'black',backgroundColor:'lightgreen' }}>
          <h3>{task.name}</h3>
          <p>Task description : {task.description}</p>
          <p>Status : {task.status}</p>
          <button onClick={() => updateStatus(task.id, 'completed')} style={{margin:'10px'}}>Mark as Completed</button>
          <button onClick={() => updateStatus(task.id, 'not completed')} style={{margin:'10px'}}>Mark as Not Completed</button>
          <button style={{margin:'10px',backgroundColor:'green'}}>Edit</button>
          <button onClick={() => deleteTask(task.id)} style={{margin:'10px',backgroundColor:'red'}}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoApp;