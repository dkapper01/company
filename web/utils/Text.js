import React from 'react'
import styles from './module/Text.module.css'
import PropTypes from 'prop-types'

const Title = ({children}) => {
  return (
    <h4 className={styles.title}>
      {children}
    </h4>
  )
}
Title.propTypes = {
  children: PropTypes.string
}

const Heading = ({children}) => {
  return (
    <h2 className={styles.heading}>
      {children}
    </h2>
  )
}
Heading.propTypes = {
  children: PropTypes.string
}
const SubHeading = ({children}) => {
  return (
    <p className={styles.subheading}>
      {children}
    </p>
  )
}
SubHeading.propTypes = {
  children: PropTypes.string
}
const Text = ({children}) => {
  return (
    <p className={styles.text}>
      {children}
    </p>
  )
}
Text.propTypes = {
  children: PropTypes.string
}
export {Title, Heading, SubHeading, Text}
