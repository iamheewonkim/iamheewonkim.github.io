import React from 'react';
import { Date } from './index.styles';

interface Props {
  date: string;
}

function PostDate({ date }: Props) {
  return <Date className="post-date">{date}</Date>;
}

export default PostDate;
