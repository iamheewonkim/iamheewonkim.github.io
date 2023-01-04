import React from 'react';
import UnicornIcon from '../unicorn-icon';
import { TopContainer, TopLink } from './index.styles';

interface Props {
  title: string;
  location: Location;
  rootPath: string;
}

function Top({ title, location, rootPath }: Props) {
  const isRoot = location.pathname === rootPath;
  return (
    <TopContainer className="top">
      {!isRoot && (
        <TopLink to={`/`} className="link">
          {title}
        </TopLink>
      )}
      <UnicornIcon />
    </TopContainer>
  );
}

export default Top;
