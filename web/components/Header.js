import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import SVG from 'react-inlinesvg'
import {Button} from '../utils'
// import HamburgerIcon from './icons/Hamburger'

class Header extends Component {
  state = {showNav: false};

  static propTypes = {
    router: PropTypes.shape({
      pathname: PropTypes.string,
      query: PropTypes.shape({
        slug: PropTypes.string
      }),
      events: PropTypes.any
    }),
    title: PropTypes.string,
    navItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.shape({
          current: PropTypes.string
        }).isRequired
      })
    ),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string
      }),
      logo: PropTypes.string
    })
  };

  componentDidMount () {
    const {router} = this.props
    router.events.on('routeChangeComplete', this.hideMenu)
  }

  componentWillUnmount () {
    const {router} = this.props
    router.events.off('routeChangeComplete', this.hideMenu)
  }

  hideMenu = () => {
    this.setState({showNav: false})
  };

  handleMenuToggle = () => {
    const {showNav} = this.state
    this.setState({
      showNav: !showNav
    })
  };

  renderLogo = logo => {
    if (!logo || !logo.asset) {
      return null
    }

    if (logo.asset.extension === 'svg') {
      return <SVG src={logo.asset.url} className='' />
    }

    return <img src={logo.asset.url} alt={logo.title} className='' />
  };

  render () {
    const {title = 'Missing title', navItems, router, logo} = this.props
    // const {showNav} = this.state

    return (
      <header className='sticky top-0 bg-white shadow'>
        <div className='container sm:px-20 flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8'>
          <div className='flex items-center text-2xl'>
            <div className='w-12 mr-3'>
              <Link
                href={{
                  pathname: '/LandingPage',
                  query: {
                    slug: '/'
                  }
                }}
                as='/'
              >
                <a title={title}>{this.renderLogo(logo)}</a>
              </Link>
            </div>
          </div>
          <div className='flex mt-4 sm:mt-0'>
            {navItems &&
              navItems.map(item => {
                const {slug, title, _id} = item
                const isActive =
                  router.pathname === '/LandingPage' && router.query.slug === slug.current
                return (
                  <Link
                    href={{
                      pathname: '/LandingPage',
                      query: {slug: slug.current}
                    }}
                    as={`/${slug.current}`}
                  >
                    <a className='px-4' data-is-active={isActive ? 'true' : 'false'} key={_id}>
                      {title}
                    </a>
                  </Link>
                )
              })}
          </div>
          <div className='hidden md:block'>
            <Button className='text-sm'>Start Free Trial</Button>
          </div>
        </div>
      </header>

    // <div className='' data-show-nav={showNav}>
    //   <h1 className=''>
    //     <Link
    //       href={{
    //         pathname: '/LandingPage',
    //         query: {
    //           slug: '/'
    //         }
    //       }}
    //       as='/'
    //     >
    //       <a title={title}>{this.renderLogo(logo)}</a>
    //     </Link>
    //   </h1>
    //   <nav className=''>
    //     <ul className=''>
    //       {navItems &&
    //         navItems.map(item => {
    //           const {slug, title, _id} = item
    //           const isActive =
    //             router.pathname === '/LandingPage' && router.query.slug === slug.current
    //           return (
    //             <li key={_id} className=''>
    //               <Link
    //                 href={{
    //                   pathname: '/LandingPage',
    //                   query: {slug: slug.current}
    //                 }}
    //                 as={`/${slug.current}`}
    //               >
    //                 <a data-is-active={isActive ? 'true' : 'false'}>{title}</a>
    //               </Link>
    //             </li>
    //           )
    //         })}
    //     </ul>
    //     <button className='' onClick={this.handleMenuToggle}>
    //       <HamburgerIcon className='' />
    //     </button>
    //   </nav>
    // </div>
    )
  }
}

export default withRouter(Header)
