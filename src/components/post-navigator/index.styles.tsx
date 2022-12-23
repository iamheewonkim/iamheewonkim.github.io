import styled from 'styled-components';
import { theme } from '../../constants/theme';
import { Link } from 'gatsby';

export const NavigatorContainer = styled.ul`
  margin: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 12px;
  }
`;

export const NavigatorLink = styled(Link)`
  padding: 7px 16px 8px 16px;
  border-radius: 6px;
  font-size: 12px;
  opacity: 0.8;
`;
