import React from 'react'
// import styles from '../modules/TwoRowSection.module.css'
import imageUrlBuilder from '@sanity/image-url'
import PropTypes from 'prop-types'
import client from '../../client'
import {Title, Heading, Text, SubHeading, SectionArray} from '../../utils'

const builder = imageUrlBuilder(client)

const TwoRowSection = props => {
  const {
    heading,
    subheading,
    textOne,
    textTwo,
    textThree,
    textFour,
    titleOne,
    titleTwo,
    titleThree,
    titleFour,
    imageOne,
    imageTwo,
    imageThree,
    imageFour
  } = props
  return (
    <SectionArray>
      <div className='bg-gray-200 p-4 md:p-20 rounded-lg flex flex-wrap overflow-hidden sm:-mx-px md:-mx-1 lg:-mx-2 xl:-mx-3'>
        <Heading>{heading}</Heading>
        <SubHeading>{subheading}</SubHeading>
        <div className='overflow-hidden sm:my-px sm:px-px sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2'>
          <img
            src={builder
              .image(imageOne)
              .auto('format')
              .url()}
            className='h-64'
          />
          <h3 className='font-semibold text-xl'>{titleOne}</h3>
          <div className='text-base mt-5 font-light'>{textOne}</div>
        </div>

        <div className='w-64 overflow-hidden sm:my-px sm:px-px sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2'>
          <img
            src={builder
              .image(imageTwo)
              .auto('format')
              .url()}
            className='h-64'
          />
          <h3 className='font-semibold text-xl'>{titleTwo}</h3>
          <div className='text-base mt-5 font-light'>{textTwo}</div>
        </div>

        <div className='w-full overflow-hidden sm:my-px sm:px-px sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2'>
          <img
            src={builder
              .image(imageThree)
              .auto('format')
              .url()}
            className='h-64'
          />
          <h3 className='font-semibold text-xl'>{titleThree}</h3>
          <div className='text-base mt-5 font-light'>{textThree}</div>
        </div>
        <div className='w-full overflow-hidden sm:my-px sm:px-px sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-3 xl:px-3 xl:w-1/2'>
          <img
            src={builder
              .image(imageFour)
              .auto('format')
              .url()}
            className='h-64'
          />
          <h3 className='font-semibold text-xl'>{titleFour}</h3>
          <div className='text-base mt-5 font-light'>{textFour}</div>
        </div>
      </div>
    </SectionArray>
  )
}

TwoRowSection.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  textOne: PropTypes.string,
  textTwo: PropTypes.string,
  textThree: PropTypes.string,
  textFour: PropTypes.string,
  titleOne: PropTypes.string,
  titleTwo: PropTypes.string,
  titleThree: PropTypes.string,
  titleFour: PropTypes.string,
  imageOne: PropTypes.object,
  imageTwo: PropTypes.object,
  imageThree: PropTypes.object,
  imageFour: PropTypes.object
}
export default TwoRowSection

// <div className=''>
//   <Heading>{heading}</Heading>
//   <SubHeading>{subheading}</SubHeading>
//   <div className=''>
//     <div className=''>
//       <img
//         src={builder
//           .image(imageOne)
//           .auto('format')
//           .url()}
//         className=''
//       />
//       <Title>{titleOne}</Title>
//       <Text>{textOne}</Text>
//     </div>

//     <div className=''>
//       <img
//         src={builder
//           .image(imageTwo)
//           .auto('format')
//           .url()}
//         className=''
//       />
//       <Title>{titleTwo}</Title>
//       <Text>{textTwo}</Text>
//     </div>

//     <div className=''>
//       <img
//         src={builder
//           .image(imageThree)
//           .auto('format')
//           .url()}
//         className=''
//       />
//       <Title>{titleThree}</Title>
//       <Text>{textThree}</Text>
//     </div>

//     <div className=''>
//       <img
//         src={builder
//           .image(imageFour)
//           .auto('format')
//           .url()}
//         className=''
//       />
//       <Title>{titleFour}</Title>
//       <Text>{textFour}</Text>
//     </div>
//   </div>
// </div>
