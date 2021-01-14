import React from 'react';
import { Link } from 'react-router-dom'; //클릭 하면 이동할 수 있도록 링크 사용

function PostList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default PostList;