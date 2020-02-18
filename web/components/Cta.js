import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
// import styles from './Cta.module.css'

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
}

function cta (props) {
  const {title, route, link, className, size} = props

  if (route && route.slug && route.slug.current) {
    return (
      <Link
        href={{
          pathname: '/LandingPage',
          query: {slug: route.slug.current}
        }}
        as={`/${route.slug.current}`}
      >
        <a
          className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-primary
        hover:bg-primary-darker
        rounded-full
        text-white
        inline-block
    `}
        >
          {title}
        </a>
      </Link>
    )
  }

  if (link) {
    return (
      <a className='' href={link}>
        {title}
      </a>
    )
  }

  return <a className=''>{title}</a>
}

cta.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  route: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string
    })
  }),
  link: PropTypes.string
}

export default cta
