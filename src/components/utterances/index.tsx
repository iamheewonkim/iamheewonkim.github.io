import React, { useEffect, useRef } from 'react';

import * as Dom from '../../utils/dom';
import { THEME } from '../../constants';
import { src, branch, DARK_THEME, LIGHT_THEME } from './constants';

interface Props {
  repo: string;
}

function Utterances({ repo }: Props) {
  const rootElm: React.RefObject<HTMLDivElement> = React.createRef();

  useEffect(() => {
    const isDarkTheme = Dom.hasClassOfBody(THEME.DARK);
    const utterances = document.createElement('script');
    const utterancesConfig = {
      src,
      repo,
      branch,
      theme: isDarkTheme ? DARK_THEME : LIGHT_THEME,
      label: 'comment',
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    };

    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey]);
    });
    rootElm.current!.appendChild(utterances);
  }, []);

  return <div className="utterances" ref={rootElm} />;
}

export default Utterances;
