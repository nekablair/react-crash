import React from 'react'
import Task from './Task.jsx'

//          destructuring
const Tasks = ({ tasks, onDelete }) => { 

  return (
    <>
       {tasks.map((task) => (
        //        props         props         props
       <Task key={task.id} task={task} onDelete={onDelete}/>
       ))} 
    </>
  )
}

export default Tasks