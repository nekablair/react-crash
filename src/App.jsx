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
        {/* because we are trying to insert a number, instead of a string using proptypes, we get this output in console: Warning: Failed prop type: Invalid prop `title` of type `number` supplied to `Header`, expected `string`*/}
        <Header title={1} />
      </div>
        
    </>
  )
}

export default App
