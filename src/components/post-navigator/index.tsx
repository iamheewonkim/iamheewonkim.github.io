import React from 'react';
import { NavigatorContainer, NavigatorLink } from './index.styles';

interface Props {
  pageContext: {
    next: {
      fields: { slug: string };
      frontmatter: { title: string };
    } | null;
    previous: {
      fields: { slug: string };
      frontmatter: { title: string };
    } | null;
    slug: string;
  };
}

function PostNavigator({ pageContext }: Props) {
  const { previous, next } = pageContext;

  return (
    <NavigatorContainer className="navigator">
      <li>
        {previous && (
          <NavigatorLink to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </NavigatorLink>
        )}
      </li>
      <li>
        {next && (
          <NavigatorLink to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </NavigatorLink>
        )}
      </li>
    </NavigatorContainer>
  );
}

export default PostNavigator;
