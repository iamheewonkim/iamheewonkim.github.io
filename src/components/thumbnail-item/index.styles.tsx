import styled from 'styled-components';
import { Link } from 'gatsby';

export const ThumbnailLink = styled(Link)`
  &.thumbnail {
    display: block;
    margin-bottom: 12px;
    padding: 4px;
    padding-bottom: 12px;
    box-shadow: none;
    transition: text-shadow 0.3s, opacity 0.4s;
    opacity: 0;

    p {
      font-size: 90%;
      line-height: 1.4;
    }
  }

  &.thumbnail.visible {
    opacity: 1;
  }
`;
