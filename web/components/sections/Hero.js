import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'
// import {SectionArray} from '../../utils'
// const builder = imageUrlBuilder(client)

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

function Hero (props) {
  const {heading, backgroundImage, tagline, ctas} = props

  return (
    <section className='pt-20 md:pt-32'>
      <div className='container mx-auto px-0 sm:px-8 lg:flex'>
        <div className='text-center lg:text-left lg:w-1/2'>
          <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold leading-none'>{heading}</h1>
          <p className='text-xl lg:text-2xl mt-6 font-light'>
            {tagline && <SimpleBlockContent blocks={tagline} />}
          </p>
          <p className='mt-8 md:mt-12'>
            {ctas && (
              <div className=''>
                {ctas.map(cta => (
                  <Cta {...cta} key={cta._key} size='lg' />
                ))}
              </div>
            )}
          </p>
          {/* <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p> */}
        </div>
        <div className='lg:w-1/2'>
          <img src={urlFor(backgroundImage).url()} />
        </div>
      </div>
    </section>
  )
}
Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object)
}

export default Hero
