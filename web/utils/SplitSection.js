import React from 'react'
import PropTypes from 'prop-types'
// import {SectionArray} from '../utils' 

const SplitSection = ({id, primarySlot, secondarySlot, reverseOrder}) => (
  <section id={id} className='py-20'>
    <div className='container mx-auto px-16 items-center flex flex-col lg:flex-row'>
      <div className='lg:w-1/2'>{primarySlot}</div>
      <div
        className={`mt-10 lg:mt-0 w-full lg:w-1/2 ${reverseOrder && `order-last lg:order-first`}`}
      >
        {secondarySlot}
      </div>
    </div>
  </section>
)

SplitSection.propTypes = {
  id: PropTypes.string,
  primarySlot: PropTypes.string,
  secondarySlot: PropTypes.string,
  reverseOrder: PropTypes.string
}

export default SplitSection
