import React from 'react';

interface Props {
  html: string;
}

function PostContainer({ html }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default PostContainer;
