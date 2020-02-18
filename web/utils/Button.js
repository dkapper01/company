import React from 'react'
import PropTypes from 'prop-types'

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
}

const Button = ({children, className = '', size}) => {
  return (
    <button
      type='button'
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary
        hover:bg-primary-darker
        rounded-full
        text-white
    `}
    >
      {children}
    </button>
  )
}
Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string
}
export default Button
