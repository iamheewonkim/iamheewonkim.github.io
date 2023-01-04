import styled from 'styled-components';

export const CategoryContainer = styled.ul`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  line-height: 0;
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none; // IE 10+
  overflow: -moz-scrollbars-none; // Firefox
  z-index: 1;
  padding: 6px 20px;
  scroll-behavior: smooth;

  li {
    display: inline-block;
    margin: 0.25rem 6px 0.25rem 0;
    border-radius: 15px;
    white-space: normal;
    box-sizing: border-box;
    cursor: pointer;

    div {
      display: block;
      // padding: 14px 16px 16px 16px;
      padding: 16px;
      font-size: 14px;
      box-sizing: border-box;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  ::-webkit-scrollbar {
    display: none; // Safari and Chrome
  }

  @media (prefers-reduced-motion: reduce) {
    .my-smooth-container {
      scroll-behavior: auto;
    }
  }
`;

// .category-container {
//   scroll-behavior: smooth;
// }
// @media (prefers-reduced-motion: reduce) {
//   .my-smooth-container {
//     scroll-behavior: auto;
//   }
// }
