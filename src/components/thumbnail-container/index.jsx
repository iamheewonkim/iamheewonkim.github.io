import React from 'react'

import './index.scss'

function ThumbnailContainer({ children }) {
  return <div className="thumbnail-container">{children}</div>
}

export default React.memo(ThumbnailContainer)
