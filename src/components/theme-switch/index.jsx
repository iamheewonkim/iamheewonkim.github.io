import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';

import * as Dom from '../../utils/dom';
import * as Storage from '../../utils/storage';
import { THEME } from '../../constants';

import './index.scss';

const MoonIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.9955 11.7115L21.995 11.68C21.9852 11.3701 21.8322 11.0822 21.5809 10.9007C21.3295 10.7192 21.0081 10.6646 20.7109 10.7528L20.9955 11.7115ZM12.2885 3.00454L13.2472 3.28913C13.3354 2.99189 13.2808 2.67053 13.0993 2.41915C12.9178 2.16776 12.6299 2.01479 12.32 2.00503L12.2885 3.00454ZM20.7109 10.7528C20.1699 10.9134 19.5959 11 19 11V13C19.7907 13 20.5563 12.885 21.2801 12.6701L20.7109 10.7528ZM19 11C15.6863 11 13 8.31371 13 5H11C11 9.41828 14.5817 13 19 13V11ZM13 5C13 4.40407 13.0866 3.83011 13.2472 3.28913L11.3299 2.71994C11.115 3.44371 11 4.20931 11 5H13ZM12 4C12.086 4 12.1717 4.00135 12.2571 4.00404L12.32 2.00503C12.2137 2.00169 12.107 2 12 2V4ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM20 12C20 16.4183 16.4183 20 12 20V22C17.5228 22 22 17.5228 22 12H20ZM19.996 11.7429C19.9986 11.8283 20 11.914 20 12H22C22 11.893 21.9983 11.7863 21.995 11.68L19.996 11.7429Z"
        fill="#FFC242"
      />
    </svg>
  );
};

const SunIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3_23)">
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="#0094FF"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M20 12H21"
          stroke="#0094FF"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M3 12H4"
          stroke="#0094FF"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M12 20L12 21"
          stroke="#0094FF"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M12 3L12 4"
          stroke="#0094FF"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M17.6569 17.6569L18.364 18.364"
          stroke="#0094FF"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M5.63604 5.63604L6.34315 6.34315"
          stroke="#0094FF"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M6.34315 17.6569L5.63604 18.364"
          stroke="#0094FF"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M18.364 5.63604L17.6569 6.34315"
          stroke="#0094FF"
          stroke-width="2"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_23">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
function getTheme(checked) {
  return checked ? THEME.DARK : THEME.LIGHT;
}

function toggleTheme(theme) {
  switch (theme) {
    case THEME.LIGHT: {
      Dom.addClassToBody(THEME.LIGHT);
      Dom.removeClassToBody(THEME.DARK);
      break;
    }
    case THEME.DARK: {
      Dom.addClassToBody(THEME.DARK);
      Dom.removeClassToBody(THEME.LIGHT);
      break;
    }
  }
}

export const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = checked => {
    const theme = getTheme(checked);

    Storage.setTheme(checked);
    setChecked(checked);
    toggleTheme(theme);
  };

  useEffect(() => {
    const checked = Storage.getTheme(Dom.hasClassOfBody(THEME.DARK));

    handleChange(checked);
  }, []);

  return (
    <div className="switch-container">
      <label htmlFor="normal-switch">
        <Switch
          onChange={handleChange}
          checked={checked}
          id="normal-switch"
          height={24}
          width={48}
          checkedIcon={
            <div className="icon checkedIcon">
              <MoonIcon />
            </div>
          }
          uncheckedIcon={
            <div className="icon uncheckedIcon">
              <SunIcon />
            </div>
          }
          offColor={'#d9dfe2'}
          offHandleColor={'#fff'}
          onColor={'#999'}
          onHandleColor={'#282c35'}
        />
      </label>
    </div>
  );
};
