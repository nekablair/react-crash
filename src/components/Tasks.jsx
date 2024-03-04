import React from 'react'
import Task from './components/Task.jsx'

//          destructuring
const Tasks = ({ tasks }) => { 

  return (
    <>
       {tasks.map((task) => (
       <Task key={task.id}>{task.text}</Task>
       ))} 
    </>
  )
}

export default Tasks