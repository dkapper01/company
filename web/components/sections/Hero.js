import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../modules/Hero.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

// const builder = imageUrlBuilder(client)

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

function Hero (props) {
  const {heading, backgroundImage, tagline, ctas} = props

  // const style = backgroundImage.asset
  //   ? {
  //     backgroundImage: `url("${urlFor(backgroundImage)
  //       .width(500)
  //       .auto('format')
  //       .url()}")`
  //   }
  //   : {}
  // : {backgroundImage: `linear-gradient(to bottom right, #3f51b5, #1a237e)`}

  return (
    <div className={styles.hero}>
      <div className={styles.leftWrapper}>
        <h1 className={styles.title}>{heading}</h1>
        <div className={styles.tagline}>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
        {ctas && (
          <div className={styles.ctas}>
            {ctas.map(cta => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </div>
      <div className={styles.rightWrapper}>
        <img className={styles.image} src={urlFor(backgroundImage).url()} />
      </div>
    </div>
  )
}
Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object)
}
// Hero.propTypes = {
//   heading: PropTypes.string,
//   backgroundImage: PropTypes.object,
//   tagline: PropTypes.array,
//   ctas: PropTypes.arrayOf(PropTypes.object)
// };

export default Hero
