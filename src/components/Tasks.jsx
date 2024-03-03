import React from 'react'
import { useState } from 'react'

const Tasks = () => {
    //tasks variable, setTasks updates state or changes being made
    //useState when inside a component is component state, it isn't coming from somewhere outside the component
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Grocery Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false
        },
        {
            id: 2,
            text: 'Practice React',
            day: 'Feb 12th at 7:00am',
            reminder: true
        },
        {
            id: 3,
            text: 'Birthday Party',
            day: 'Feb 28th at 5:00pm',
            reminder: false
        }
    ])
    //you can't change state, it's immutable, so trying to do tasks.push() won't work, it rerenders everytime a change is made, it's recreated and sent down, it one way data
    //to change you do the following
    // setTasks([...tasks, {}])//can change state with setTasks and using spread operator to get everything in tasks, you can set it to something new

  return (
    <>
       {tasks.map((task) => (
       <h3 key={task.id}>{task.text}</h3>
       ))} 
    </>
  )
}

export default Tasks