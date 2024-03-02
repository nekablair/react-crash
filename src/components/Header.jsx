import React from 'react'

//something called prop types that can be used to make your code more robust, think defensive programming perhaps?
import PropTypes from 'prop-types'


// props is just an object of whatever we pass in, so we can destructure
const Header = ({ title }) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}
// example of default props use
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
