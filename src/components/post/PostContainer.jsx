import React from 'react'

function PostContainer({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
export default PostContainer
