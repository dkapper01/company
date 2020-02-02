import React from 'react'
import SimpleBlockContent from '../SimpleBlockContent'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../modules/LogoSection.module.css'
import client from '../../client'

const builder = imageUrlBuilder(client)

const LogoSection = props => {
  const {heading, logo, text} = props
  console.log(props)
  return (
    <div>
      <h3 className={styles.heading}>{heading}</h3>
      {text && (
        <div className={styles.text}>
          <SimpleBlockContent blocks={text} />
        </div>
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
    </div>
  )
}

export default LogoSection
