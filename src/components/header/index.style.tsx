import styled from 'styled-components';
import { theme } from '../../constants/theme';
import { Link } from 'gatsby';

export const HeaderContainer = styled.h1`
  margin-top: 0;
  border-bottom: none;
  font-weight: 900;
  font-size: 48px;
  letter-spacing: -2px;
`;

export const HeaderLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;
