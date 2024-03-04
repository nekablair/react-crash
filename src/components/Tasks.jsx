import React from 'react'
import Task from './Task.jsx'

//          destructuring
const Tasks = ({ tasks }) => { 

  return (
    <>
       {tasks.map((task) => (
       <Task key={task.id} task={task}/>
       ))} 
    </>
  )
}

export default Tasks