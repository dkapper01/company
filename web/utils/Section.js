import React from 'react'
import styles from './module/Section.module.css'
import PropTypes from 'prop-types'

const Section = ({children}) => {
  console.log(children)
  return <div className={styles.section}>{children}</div>
}

Section.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object)
}

const SectionObject = ({children}) => {
  console.log(children)
  return <div className={styles.section}>{children}</div>
}
SectionObject.propTypes = {
  children: PropTypes.object
}
export {Section, SectionObject}
