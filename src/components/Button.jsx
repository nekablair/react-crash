import React from 'react'
//impt shortcut for importing proptypes
import PropTypes from 'prop-types'
//destructuring happening below
const Button = ({ color, text }) => {
    // because we are destructuring, we are bringing in the props from Header that's set on the Button component in the parent Header element, in this case color and text

    const onClick = () => {
        console.log("click")
    }


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