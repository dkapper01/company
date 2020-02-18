import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
// import styles from '../modules/LogoSection.module.css'
import client from '../../client'
import PropTypes from 'prop-types'
import '../../css/tailwind.css'
import {Heading, SubHeading, Section} from '../../utils'

const builder = imageUrlBuilder(client)

const LogoSection = props => {
  const {heading, logo, text} = props
  return (
    <div className='container'>
      <Heading>{heading}</Heading>
      {text && <SubHeading>{text}</SubHeading>}
      <div className='flex justify-center'>
        {logo.map(item => {
          return (
            <img
              key={item._key}
              className='w-56'
              src={builder
                .image(item)
                .width(200)
                .url()}
            />
          )
        })}
      </div>
    </div>
  )
}
LogoSection.propTypes = {
  heading: PropTypes.string,
  logo: PropTypes.array,
  text: PropTypes.string
}

export default LogoSection
