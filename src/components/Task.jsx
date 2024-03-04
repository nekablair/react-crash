import React from 'react'
//using icons by bringing them in like react components
import { FaTimes } from 'react-icons/fa'

//because we are using onDelete as a prop and calling that once we click, this is an example of event bubbling
const Task = ({ task, onDelete }) => {
  return (
    <>
        <div className = 'task'>
            <h3>{task.text}<FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={onDelete} /></h3>
            <p>{task.day}</p>
        </div>
    </>
  )
}

export default Task
