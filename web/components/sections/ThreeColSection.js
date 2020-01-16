import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'

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
    <div>
      <h2>{heading && heading}</h2>
      <ul>
        <li>
          {titleOne}
          <SimpleBlockContent blocks={shortDescriptionOne} />
        </li>
        <li>
          {titleTwo}
          <SimpleBlockContent blocks={shortDescriptionTwo} />
        </li>
        <li>
          {titleThree}
          <SimpleBlockContent blocks={shortDescriptionThree} />
        </li>
      </ul>
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
