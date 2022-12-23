import styled from 'styled-components';

export const SponsorButtonContainer = styled.div`
  text-align: right;
  margin: 4px;
`;

export const SponsorButtonLink = styled.a`
  display: inline-block;
  padding: 0px 7px;
  width: 133px;
  height: 33px;
  text-decoration: none;
  background-color: #bb5794;
  color: #ffffff;
  border: 1px solid transparent;
  border-radius: 6px;
  letter-spacing: -0.08px;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 30px;
  text-align: left;

  &:hover,
  &:active {
    background-color: #a0457d;
  }

  img {
    width: 20px;
    margin-bottom: 1px;
    box-shadow: none;
    border: none;
    vertical-align: middle;
  }

  span {
    margin-left: 6px;
  }
`;

export const SponsorButtonImg = styled.img`
  width: 20px;
  margin-bottom: 1px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
`;

export const SponsorButtonText = styled.span`
  margin-left: 6px;
`;
