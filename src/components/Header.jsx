import React from 'react'

const Header = (props) => {
  return (
    <header>
        <h1>{props.title}</h1>
    </header>
  )
}
// example of default props use
Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header
