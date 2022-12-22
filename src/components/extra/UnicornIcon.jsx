import React from 'react'

import './styles/UnicornIcon.scss'
import Unicorn from './assets/unicorn.svg'

function UnicornIcon() {
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

export default UnicornIcon
