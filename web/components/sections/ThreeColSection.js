import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from '../modules/ThreeColSection.module.css'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {Section} from '../../utils'

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
    <Section>
      <div className={styles.content}>
        <h2>{heading && heading}</h2>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <IoMdCheckmarkCircleOutline className={styles.icon} />
            <div>
              <h3 className={styles.title}>{titleOne}</h3>
              {shortDescriptionOne && (
                <div className={styles.text}>
                  <SimpleBlockContent blocks={shortDescriptionOne} />{' '}
                </div>
              )}
            </div>
          </div>
          <div className={styles.item}>
            <IoMdCheckmarkCircleOutline className={styles.icon} />
            <div>
              <h3 className={styles.title}>{titleTwo}</h3>
              {shortDescriptionTwo && (
                <div className={styles.text}>
                  <SimpleBlockContent blocks={shortDescriptionTwo} />{' '}
                </div>
              )}
            </div>
          </div>
          <div className={styles.item}>
            <IoMdCheckmarkCircleOutline className={styles.icon} />
            <div>
              <h3 className={styles.title}>{titleThree}</h3>
              {shortDescriptionThree && (
                <div className={styles.text}>
                  <SimpleBlockContent blocks={shortDescriptionThree} />{' '}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
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
