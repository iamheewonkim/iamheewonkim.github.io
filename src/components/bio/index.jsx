import React, { forwardRef } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import HeewonKimMemoji from './heewonkim.png'
import './index.scss'

function Bio(props, ref) {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social, introduction } = data.site.siteMetadata
        return (
          <div ref={ref} className="bio">
            <div className="author">
              <div className="author-description">
                <img
                  className="author-image"
                  src={HeewonKimMemoji}
                  alt={author}
                  style={{
                    width: '80px',
                    height: '80px',
                  }}
                />
                <div className="author-name">
                  <div className="author-short-description">
                    <span className="author-name-prefix">Written by</span>
                    <Link to={'/about'} className="author-name-content">
                      <span>@{author}</span>
                    </Link>
                  </div>
                  <div className="author-introduction">{introduction}</div>
                  <p className="author-socials">
                    {social.github && (
                      <a href={`https://github.com/${social.github}`}>
                        ✤ GitHub
                      </a>
                    )}
                    {social.medium && (
                      <a href={`https://medium.com/@${social.medium}`}>
                        ✤ Medium
                      </a>
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
                        ✤ Instagram
                      </a>
                    )}
                    {social.twitter && (
                      <a href={`https://twitter.com/${social.twitter}`}>
                        Twitter
                      </a>
                    )}
                    {social.facebook && (
                      <a href={`https://www.facebook.com/${social.facebook}`}>
                        Facebook
                      </a>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

export default React.forwardRef(Bio)

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
`
