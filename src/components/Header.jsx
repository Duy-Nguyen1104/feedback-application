import React from 'react'
import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    padding: '10px 0',
    marginBottom: '10px',
    textAlign: 'center'
  }
  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback Application',
    bgColor: 'black',
    textColor: 'white'
}

Header.propTypes = {
    text: PropTypes.number,
}

export default Header