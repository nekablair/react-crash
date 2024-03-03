import React from 'react'

const Tasks = () => {

    const tasks = [
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
    ]

  return (
    <>
       {tasks.map((task) => (
       <h3 key={task.id}>{task.text}</h3>
       ))} 
    </>
  )
}

export default Tasks