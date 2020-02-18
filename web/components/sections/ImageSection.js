import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'
import {SplitSection, SectionArray} from '../../utils'

const builder = imageUrlBuilder(client)

function ImageSection (props) {
  const {heading, label, text, image, cta} = props
  if (!image) {
    return null
  }

  return (
    <div>
      <SplitSection
        id='services'
        primarySlot={
          <div className='lg:pr-32 xl:pr-48'>
            <h3 className='text-3xl font-semibold leading-tight'>{heading}</h3>
            <p className='mt-8 text-xl font-light leading-relaxed'>
              {text && <SimpleBlockContent blocks={text} />}
            </p>
            {cta && cta.route && <Cta {...cta} />}
          </div>
        }
        secondarySlot={<img
          src={builder
            .image(image)
            .auto('format')
            .width(2000)
            .url()}
          className=''
          alt={heading}
        />}
      />
      {/* <SplitSection
        reverseOrder
        primarySlot={
          <div className='lg:pl-32 xl:pl-48'>
            <h3 className='text-3xl font-semibold leading-tight'>
              Design And Plan Your Business Growth Steps
            </h3>
            <p className='mt-8 text-xl font-light leading-relaxed'>
              Once the market analysis process is completed our staff will search for opportunities
              that are in reach
            </p>
          </div>
        }
        secondarySlot={<img
          src={builder
            .image(image)
            .auto('format')
            .width(2000)
            .url()}
          className=''
          alt={heading}
        />}
      /> */}
      {/* <SplitSection
        primarySlot={
          <div className='lg:pr-32 xl:pr-48'>
            <h3 className='text-3xl font-semibold leading-tight'>
              Search For Performance Optimization
            </h3>
            <p className='mt-8 text-xl font-light leading-relaxed'>
              With all the information in place you will be presented with an action plan that your
              company needs to follow
            </p>
          </div>
        }
        secondarySlot={<img
          src={builder
            .image(image)
            .auto('format')
            .width(2000)
            .url()}
          className=''
          alt={heading}
        />}
      /> */}
    </div>
    // <div className=''>
    //   <figure className=''>
    //     <img
    //       src={builder
    //         .image(image)
    //         .auto('format')
    //         .width(2000)
    //         .url()}
    //       className=''
    //       alt={heading}
    //     />
    //     <figcaption>
    //       <div className=''>
    //         <div className=''>
    //           <div className=''>{label}</div>
    //           <h2 className=''>{heading}</h2>
    //           {text && <SimpleBlockContent blocks={text} />}
    //           {cta && cta.route && <Cta {...cta} />}
    //         </div>
    //       </div>
    //     </figcaption>
    //   </figure>
    // </div>
  )
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string
    })
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object
}

export default ImageSection
