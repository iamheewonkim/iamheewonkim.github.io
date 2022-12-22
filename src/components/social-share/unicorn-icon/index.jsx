import React from 'react'

import './index.scss'
import Unicorn from './unicorn.svg'

export const UnicornIcon = () => {
  return (
    <a
      href="https://github.com/iamheewonkim"
      className="unicorn"
      aria-label="GitHub"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={Unicorn}
        alt="unicorn"
        className="icon"
        width="45"
        height="45"
        viewBox="0 0 24 24"
      />
    </a>
  )
}
