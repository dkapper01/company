import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from '../modules/ThreeColSection.module.css'
import {IoMdCheckmark} from 'react-icons/io'

const ThreeColSection = props => {
  const {
    heading,
    titleOne,
    titleTwo,
    titleThree,
    shortDescriptionOne,
    shortDescriptionTwo,
    shortDescriptionThree
  } = props
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h2>{heading && heading}</h2>
        <div className={styles.wrapper}>

          <div className={styles.item}>
            <IoMdCheckmark />
            <h3 className={styles.title}>{titleOne}</h3>
            {shortDescriptionOne && <div className={styles.text}><SimpleBlockContent blocks={shortDescriptionOne} /> </div>}
          </div>
          <div className={styles.item}>
            <h3 className={styles.title}>{titleTwo}</h3>
            {shortDescriptionTwo && <div className={styles.text}><SimpleBlockContent blocks={shortDescriptionTwo} /> </div>}

          </div>
          <div className={styles.item}>
            <h3 className={styles.title}>{titleThree}</h3>
            {shortDescriptionThree && <div className={styles.text}><SimpleBlockContent blocks={shortDescriptionThree} /> </div>}

          </div>
        </div>
      </div>
    </div>
  )
}

ThreeColSection.propTypes = {
  heading: PropTypes.string,
  titleOne: PropTypes.string,
  titleTwo: PropTypes.string,
  titleThree: PropTypes.string,
  shortDescriptionOne: PropTypes.array,
  shortDescriptionTwo: PropTypes.array,
  shortDescriptionThree: PropTypes.array
}

export default ThreeColSection
