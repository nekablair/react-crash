import React, { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Tasks from './components/Tasks.jsx'

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

  return (
    // looks like html, but it's JSX
    //can only have one parent element, hence <> </>
    <>
      <div className='container'>
        <Header />
        <Tasks  tasks={tasks}/>
      </div>
        
    </>
  )
}

export default App
