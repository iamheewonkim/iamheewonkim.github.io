import React from 'react';
import { TARGET_CLASS } from '../../utils/visible';
import { ThumbnailLink } from './index.styles';

interface Props {
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
}

function ThumbnailItem({ node }: Props) {
  return (
    <ThumbnailLink
      className={`thumbnail ${TARGET_CLASS}`}
      to={node.fields.slug}
    >
      <div key={node.fields.slug}>
        <h3>{node.frontmatter.title || node.fields.slug}</h3>
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    </ThumbnailLink>
  );
}

export default ThumbnailItem;
