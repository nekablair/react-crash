import React from 'react'
import Button from './Button.jsx'

//something called prop types that can be used to make your code more robust, think defensive programming perhaps?
import PropTypes from 'prop-types'


// props is just an object of whatever we pass in, so we can destructure
const Header = ({ title, onAdd, showAdd }) => {
//this is getting passed as a prop, see below with Button component
    
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close': 'Add' } 
            onClick={onAdd} />
    </header>
  )
}
// example of default props use
Header.defaultProps = {
    title: 'Task Tracker'
}

//css in js
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
