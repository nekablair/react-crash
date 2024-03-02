import React from 'react'
import Button from './Button.jsx'

//something called prop types that can be used to make your code more robust, think defensive programming perhaps?
import PropTypes from 'prop-types'


// props is just an object of whatever we pass in, so we can destructure
const Header = ({ title }) => {
  return (
    <header className='header'>
        {/* inline styling requires double {{}} */}
        <h1>{title}</h1>
        {/* changed button into own component, imported and added it to return statement in Header component */}
        <Button />
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
