import styled from 'styled-components';

export const BioContainer = styled.div`
  margin-bottom: 24px;
`;

export const BioAuthorDescription = styled.div`
  display: flex;
  align-items: stretch;

  &.author-short-description {
    display: flex;
    align-items: center;
  }
`;

export const BioAuthorImg = styled.img`
  margin-right: 12px;
  margin-bottom: 0;
  min-width: 72px;
`;

export const BioAuthorName = styled.div`
  span {
    &.author-name-prefix {
      font-size: 90%;
      margin-right: 4px;
      font-weight: bolder;
    }
  }

  a {
    &.author-name-content {
      display: inline-block;
      font-size: 95%;
      padding: 2px 6px;
      font-weight: bolder;
      margin-left: 4px;
      border-radius: 8px;
      transform-origin: center;
    }
  }

  div {
    &.author-introduction {
      margin-top: 4px;
      font-size: 80%;
      line-height: 1.4;
    }
  }
`;

export const BioAuthorSocial = styled.p`
  margin-top: 4px;

  a {
    margin-right: 8px;
    font-size: 80%;

    &.visited {
      text-decoration: none;
    }
  }
`;
