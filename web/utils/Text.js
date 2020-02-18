import React from 'react'
// import styles from './module/Text.module.css'
import PropTypes from 'prop-types'

const Title = ({children}) => {
  return (
    <h4 className=''>
      {children}
    </h4>
  )
}
Title.propTypes = {
  children: PropTypes.string
}

const Heading = ({children}) => {
  return (
    <h2 className='text-3xl lg:text-5xl font-semibold text-center'>
      {children}
    </h2>
  )
}
Heading.propTypes = {
  children: PropTypes.string
}
const SubHeading = ({children}) => {
  return (
    <p className='text-base mt-5 font-light text-center'>
      {children}
    </p>
  )
}
SubHeading.propTypes = {
  children: PropTypes.string
}
const Text = ({children}) => {
  return (
    <p className=''>
      {children}
    </p>
  )
}
Text.propTypes = {
  children: PropTypes.string
}
export {Title, Heading, SubHeading, Text}
