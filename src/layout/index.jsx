import React from 'react'

import { Top, Header, ThemeSwitch, Footer } from '../components/extra'
import { rhythm } from '../utils/typography'

import './index.scss'

function Layout({ location, title, children }) {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <React.Fragment>
      <Top title={title} location={location} rootPath={rootPath} />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(40),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <ThemeSwitch />
        <Header title={title} location={location} rootPath={rootPath} />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  )
}
export default Layout
