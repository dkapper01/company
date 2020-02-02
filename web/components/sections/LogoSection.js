import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../modules/LogoSection.module.css'
import client from '../../client'
import {Heading, SubHeading, Section} from '../../utils'

const builder = imageUrlBuilder(client)

const LogoSection = props => {
  const {heading, logo, text} = props
  console.log(props)
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

export default LogoSection
