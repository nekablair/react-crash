import React from 'react'
import Task from './Task.jsx'

//          destructuring
const Tasks = ({ tasks, onDelete, onToggle }) => { 

  return (
    <>
       {tasks.map((task) => (
        //        props         props         props
       <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
       ))} 
    </>
  )
}

export default Tasks