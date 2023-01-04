import React, { useMemo } from 'react';

import ThumbnailContainer from '../thumbnail-container';
import ThumbnailItem from '../thumbnail-item';
import { CATEGORY_TYPE } from '../../constants';

interface Props {
  posts: {
    node: {
      excerpt: string;
      fields: { slug: string };
      frontmatter: {
        category: string;
        title: string;
        date: string;
        draft: boolean;
      };
    };
  }[];
  countOfInitialPost: number;
  count: number;
  category: string;
}

function Contents({ posts, countOfInitialPost, count, category }: Props) {
  const refinedPosts = useMemo(() => {
    return posts
      .filter(
        ({ node }) =>
          category === CATEGORY_TYPE.ALL ||
          node.frontmatter.category === category
      )
      .slice(0, count * countOfInitialPost);
  }, [posts]);

  return (
    <ThumbnailContainer>
      {refinedPosts.map(({ node }, index) => (
        <ThumbnailItem node={node} key={`item_${index}`} />
      ))}
    </ThumbnailContainer>
  );
}

export default Contents;
