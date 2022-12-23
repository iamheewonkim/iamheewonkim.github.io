import React from 'react';
import { ThumbnailContainerWrapper } from './index.style';

interface Props {
  children: React.ReactNode;
}

function ThumbnailContainer({ children }: Props) {
  return (
    <ThumbnailContainerWrapper className="thumbnail-container">
      {children}
    </ThumbnailContainerWrapper>
  );
}

export default React.memo(ThumbnailContainer);
