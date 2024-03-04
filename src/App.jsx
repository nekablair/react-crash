import React, { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Tasks from './components/Tasks.jsx'
import AddTask from './components/AddTask.jsx'

function App() {
  // now part of app component state, can now use a props so every other component has access to it

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

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggle reminder on task
const toggleReminder = (id) => {
  // setTasks(reminder) === true ? false : true
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
}

//add task
const addTask = (id) => {
  console.log('add', id)
}

  return (
    // looks like html, but it's JSX
    //can only have one parent element, hence <> </>
    <>
      <div className='container'>
        <Header />
        <AddTask />
        {/* because the button is actually in Tasks.jsx, we have to pass it down to that component, as a prop */}
        {tasks.length > 0 ? <Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks to Show"}
      </div>
        
    </>
  )
}

export default App
