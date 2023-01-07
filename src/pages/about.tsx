import React from 'react';
import { graphql } from 'gatsby';

import { rhythm } from '../utils/typography';
import { AboutContainer } from '../styles/pages.style';
import * as Lang from '../constants';

export default function({ data }) {
  const resumes = data.allMarkdownRemark.edges;

  const resume = resumes
    .filter(({ node }) => node.frontmatter.lang === Lang.ENGLISH)
    .map(({ node }) => node)[0];

  const max_width = rhythm(24);
  const padding = Number(
    `${rhythm(0.5)} ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(3 / 4)}`
  );
  return (
    <AboutContainer max_width={max_width} padding={padding}>
      <div dangerouslySetInnerHTML={{ __html: resume.html }} />
    </AboutContainer>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: null } } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            lang
          }
        }
      }
    }
  }
`;
