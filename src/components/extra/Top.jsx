import React from 'react'
import { Link } from 'gatsby'
import UnicornIcon from '../unicorn-icon'

import './index.scss'

function Top({ title, location, rootPath }) {
  const isRoot = location.pathname === rootPath
  return (
    <div className="top">
      {!isRoot && (
        <Link to={`/`} className="link">
          {title}
        </Link>
      )}
      <UnicornIcon />
    </div>
  )
}

export default Top
