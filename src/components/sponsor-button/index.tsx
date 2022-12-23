import React from 'react';
import {
  SponsorButtonContainer,
  SponsorButtonLink,
  SponsorButtonImg,
  SponsorButtonText,
} from './index.style';

function SponsorButton({ sponsorId }) {
  return (
    <SponsorButtonContainer className="sponsor-button">
      <SponsorButtonLink
        className="bmc-button"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.buymeacoffee.com/${sponsorId}`}
      >
        <SponsorButtonImg
          src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
          alt="Buy me a coffee"
        />
        <SponsorButtonText>Buy me a coffee</SponsorButtonText>
      </SponsorButtonLink>
    </SponsorButtonContainer>
  );
}

export default SponsorButton;
