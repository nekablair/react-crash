import React from 'react'
//using icons by bringing them in like react components, there are multiple libraries you can use, we are using font-awesome hence /fa
import { FaTimes } from 'react-icons/fa'

//because we are using onDelete as a prop and calling that once we click, this is an example of event bubbling
//state gets passed down, actions get passed up!
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <>
    {/* this task is coming down from our parent state */}
        <div className = {`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => 
          onToggle(task.id)}>
    {/* getting only the task id instead of the entire event that comes with click         */}
            <h3>{task.text}<FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    </>
  )
}

export default Task
