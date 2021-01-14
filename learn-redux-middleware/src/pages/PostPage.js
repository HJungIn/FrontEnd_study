import React from 'react';
import PostContainer from '../containers/PostContainer';

function PostPage({ match }) { //match는 리액트 라우터에서 Post페이지를 라우터로 지정하게 됐을 때 props
  const { id } = match.params; // URL 파라미터 조회하기
  const postId = parseInt(id, 10);// URL 파라미터 값은 문자열이기 때문에 parseInt로 숫자로 변환
  
  return <PostContainer postId={postId} />;
}

export default PostPage;