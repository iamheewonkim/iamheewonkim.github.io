import React from 'react';

interface Props {
  title: string;
}

function PostTitle({ title }: Props) {
  return <h1>{title}</h1>;
}

export default PostTitle;
