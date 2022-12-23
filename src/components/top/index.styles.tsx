import styled from 'styled-components';
import { theme } from '../../constants/theme';
import { Link } from 'gatsby';

export const TopContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  background: ${theme.APP.theme_gradient};
`;

export const TopLink = styled(Link)`
  display: inline-block;
  font-size: 28px;
  padding-top: 8px;
  color: ${theme.APP.top_header_text_color};
  opacity: 0.7;
  margin-left: 20px;
  font-family: 'Catamaran';
  font-weight: 800;
`;
