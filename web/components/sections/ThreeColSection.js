import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
// import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {Card, Heading, SectionArray} from '../../utils'

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
    // <section className='py-20 lg:pb-40 lg:pt-48'>
    //   <div className='container mx-auto'>
    <SectionArray>
      <Heading>{heading}</Heading>
      <div className='flex flex-col sm:flex-row sm:-mx-3 mt-12'>
        <div className='flex-1 px-3'>
          <Card className='mb-8'>
            <p className='font-semibold text-xl'>{titleOne}</p>
            <p className='mt-4'>
              <SimpleBlockContent blocks={shortDescriptionOne} />
            </p>
          </Card>
        </div>
        <div className='flex-1 px-3'>
          <Card className='mb-8'>
            <p className='font-semibold text-xl'>{titleTwo}</p>
            <p className='mt-4'>
              <SimpleBlockContent blocks={shortDescriptionTwo} />
            </p>
          </Card>
        </div>
        <div className='flex-1 px-3'>
          <Card className='mb-8'>
            <p className='font-semibold text-xl'>{titleThree}</p>
            <p className='mt-4'>
              <SimpleBlockContent blocks={shortDescriptionThree} />
            </p>
          </Card>
        </div>
      </div>
    </SectionArray>

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

// <div className=''>
//   <h2>{heading && heading}</h2>
//   <div className=''>
//     <div className=''>
//       <IoMdCheckmarkCircleOutline className='' />
//       <div>
//         <h3 className=''>{titleOne}</h3>
//         {shortDescriptionOne && (
//           <div className=''>
//             <SimpleBlockContent blocks={shortDescriptionOne} />{' '}
//           </div>
//         )}
//       </div>
//     </div>
//     <div className=''>
//       <IoMdCheckmarkCircleOutline className='' />
//       <div>
//         <h3 className=''>{titleTwo}</h3>
//         {shortDescriptionTwo && (
//           <div className=''>
//             <SimpleBlockContent blocks={shortDescriptionTwo} />{' '}
//           </div>
//         )}
//       </div>
//     </div>
//     <div className=''>
//       <IoMdCheckmarkCircleOutline className='' />
//       <div>
//         <h3 className=''>{titleThree}</h3>
//         {shortDescriptionThree && (
//           <div className=''>
//             <SimpleBlockContent blocks={shortDescriptionThree} />{' '}
//           </div>
//         )}
//       </div>
//     </div>
//   </div>
// </div>
