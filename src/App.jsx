import React, { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'

function App() {
  // components can functions or classes
  const [count, setCount] = useState(0)

  return (
    // looks like html, but it's JSX
    //can only have one parent element, hence <> </>
    <>
      <div className='container'>
        {/* can use default props */}
        <Header title='Overriding Default Props' />
      </div>
        
    </>
  )
}

export default App
