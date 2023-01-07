import React, { forwardRef } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import HeewonKimMemoji from './heewonkim.png';
import {
  BioContainer,
  BioAuthorDescription,
  BioAuthorImg,
  BioAuthorName,
  BioAuthorSocial,
} from './index.style';

interface Props {
  props?: React.ReactNode;
  ref: React.RefObject<HTMLDivElement>;
}

function Bio({ props, ref }: Props) {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social, introduction } = data.site.siteMetadata;
        return (
          <BioContainer ref={ref} className="bio">
            <div className="author">
              <BioAuthorDescription className="author-description">
                <BioAuthorImg
                  className="author-image"
                  src={HeewonKimMemoji}
                  alt={author}
                  style={{
                    width: '85px',
                    height: '85px',
                  }}
                />
                <BioAuthorName className="author-name">
                  <span className="author-name-prefix">Written by</span>
                  <Link to={'/about'} className="author-name-content">
                    <span>@{author}</span>
                  </Link>
                  <div className="author-introduction">{introduction}</div>
                  <BioAuthorSocial className="author-socials">
                    {social.github && (
                      <a href={`https://github.com/${social.github}`}>
                        ✤ GitHub
                      </a>
                    )}
                    {social.medium && (
                      <a href={`https://medium.com/${social.medium}`}>Medium</a>
                    )}
                    {social.linkedin && (
                      <a
                        href={`https://www.linkedin.com/in/${social.linkedin}/`}
                      >
                        ✤ LinkedIn
                      </a>
                    )}
                    {social.instagram && (
                      <a href={`https://www.instagram.com/${social.instagram}`}>
                        Instagram
                      </a>
                    )}
                  </BioAuthorSocial>
                </BioAuthorName>
              </BioAuthorDescription>
            </div>
          </BioContainer>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.png/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        social {
          twitter
          github
          medium
          facebook
          linkedin
          instagram
        }
      }
    }
  }
`;

export default forwardRef(Bio);
