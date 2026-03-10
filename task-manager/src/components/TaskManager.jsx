import React from 'react'
import Addtask from './Addtask'
import TaskCount from './TaskCount'
import TaskList from './TaskList'
import {useState} from 'react'

function TaskManager() {
    
    let [tasks, setTasks] = useState([]);
    //add new task
    const addNewTask = (taskobj) => {
        setTasks([...tasks,taskobj]);
    }

  return (
    <div>
        <h1 className='text-7xl text-blue-300 mb-10'>Task Manager</h1>
        <div className='flex justify-around'>
        <Addtask addNewTask={addNewTask}/>
        <TaskList tasks={tasks}/>
        <TaskCount tasks={tasks}/>
        </div>
    </div>
  )
}

export default TaskManager