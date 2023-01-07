import styled from 'styled-components';

export const AboutContainer = styled.div<{
  max_width: number;
  padding: number;
}>`
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.max_width};
  padding: ${props => props.padding};
`;
