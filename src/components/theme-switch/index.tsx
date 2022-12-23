import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';

import * as Dom from '../../utils/dom';
import * as Storage from '../../utils/storage';
import { getTheme, toggleTheme } from './module';
import { THEME } from '../../constants';
import { MoonIcon, SunIcon } from './icon';
import { ThemeSwitchContainer } from './index.style';

function ThemeSwitch() {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked: boolean) => {
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
    <ThemeSwitchContainer className="switch-container">
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
    </ThemeSwitchContainer>
  );
}

export default ThemeSwitch;
