import React from 'react';
import { HeaderContainer, HeaderLink } from './index.style';

interface Props {
  title: string;
  location: Location;
  rootPath: string;
}

function Header({ title, location, rootPath }: Props) {
  const isRoot = location.pathname === rootPath;
  return (
    isRoot && (
      <HeaderContainer className="home-header">
        <HeaderLink to={`/`} className="link">
          {title}
        </HeaderLink>
      </HeaderContainer>
    )
  );
}

export default Header;
