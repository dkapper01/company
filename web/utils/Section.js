import React from 'react'
import PropTypes from 'prop-types'

const SectionArray = ({children}) => {
  return (
    <div className='py-10 lg:pb-20 lg:pt-20'>
      <section className='container mx-auto px-5 md:px-20'>{children}</section>
    </div>
  )
}

SectionArray.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object)
}

const SectionObject = ({children}) => {
  return (
    <div className='py-20 lg:pb-40 lg:pt-48'>
      <section className='container mx-auto w-9/12'>{children}</section>
    </div>
  )
}
SectionObject.propTypes = {
  children: PropTypes.object
}
export {SectionArray, SectionObject}
