import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Tasks from './components/Tasks.jsx'
import AddTask from './components/AddTask.jsx'

function App() {
  // now part of app component state, can now use a props so every other component has access to it
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:5000/tasks")
      const data = await res.json()

      console.log(data)
    }
    fetchTasks()
  }, [])

//add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([ ...tasks, newTask])
  }

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggle reminder on task
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
}

  return (
    // looks like html, but it's JSX
    //can only have one parent element, hence <> </>
    <>
      <div className='container'>
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {/* (just checking to see if it's true, if so do <AddTask> and if not, do nothing)shorter way to do ternary without else using && */}
        {showAddTask && <AddTask onAdd={addTask} />}
        {/* because the button is actually in Tasks.jsx, we have to pass it down to that component, as a prop */}
        {tasks.length > 0 ? <Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks to Show"}
      </div>
        
    </>
  )
}

export default App
