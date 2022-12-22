import React, { useMemo } from 'react'

import ThumbnailContainer from './ThumbnailContainer'
import ThumbnailItem from './ThumbnailItem'
import { CATEGORY_TYPE } from '../../constants'

function Contents({ posts, countOfInitialPost, count, category }) {
  const refinedPosts = useMemo(() =>
    posts
      .filter(
        ({ node }) =>
          category === CATEGORY_TYPE.ALL ||
          node.frontmatter.category === category
      )
      .slice(0, count * countOfInitialPost)
  )

  return (
    <ThumbnailContainer>
      {refinedPosts.map(({ node }, index) => (
        <ThumbnailItem node={node} key={`item_${index}`} />
      ))}
    </ThumbnailContainer>
  )
}

export default Contents
