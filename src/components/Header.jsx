import React from 'react'

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

export default Header
