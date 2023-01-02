import React from 'react';
import Unicorn from './unicorn.svg';
import { UnicornLink } from './index.style';

function UnicornIcon() {
  return (
    <UnicornLink
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
      />
    </UnicornLink>
  );
}

export default UnicornIcon;
