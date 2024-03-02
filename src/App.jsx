import { useState } from 'react'
import './App.css'

function App() {
  // components can functions or classes
  const [count, setCount] = useState(0)
  const name = "Brad"

  return (
    // looks like html, but it's JSX
    //can only have one parent element, hence <> </>
    <>
      <div className='container'>
        <h1>Hello {name}</h1>
      </div>
        
    </>
  )
}

export default App
