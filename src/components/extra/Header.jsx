import React from 'react'
import { Link } from 'gatsby'

import './styles/Header.scss'

function Header({ title, location, rootPath }) {
  const isRoot = location.pathname === rootPath
  return (
    isRoot && (
      <h1 className="home-header">
        <Link to={`/`} className="link">
          {title}
        </Link>
      </h1>
    )
  )
}
export default Header
