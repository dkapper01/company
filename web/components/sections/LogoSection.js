import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../modules/LogoSection.module.css'
import client from '../../client'
import PropTypes from 'prop-types'

import {Heading, SubHeading, Section} from '../../utils'

const builder = imageUrlBuilder(client)

const LogoSection = props => {
  const {heading, logo, text} = props
  return (
    <Section>
      <Heading>{heading}</Heading>
      {text && (
        <SubHeading>
          {text}
        </SubHeading>
      )}
      <div className={styles.logoWrapper}>
        {logo.map(item => {
          return (
            <img
              key={item._key}
              className={styles.logo}
              src={builder
                .image(item)
                // .auto('format')
                .width(200)
                .url()}
            />
          )
        })}
      </div>
    </Section>
  )
}
LogoSection.propTypes = {
  heading: PropTypes.string,
  logo: PropTypes.array,
  text: PropTypes.string
}

export default LogoSection
