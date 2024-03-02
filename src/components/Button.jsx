import React from 'react'
//impt shortcut for importing proptypes
import PropTypes from 'prop-types'
//destructuring happening below, for instance there is an onClick function as a prop in the Button component in App.jsx, here it is being destructured, along with color and text
const Button = ({ color, text, onClick }) => {
    // because we are destructuring, we are bringing in the props from Header that's set on the Button component in the parent Header element, in this case color and text


  return (
    <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button