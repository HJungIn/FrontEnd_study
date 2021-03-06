import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearPost, getPost, goToHome, printState } from '../modules/posts';
import Post from '../components/Post';
import { reducerUtils } from '../lib/asyncUtils';

function PostContainer({ postId }) { //라우터를 통해 받아올 것임
  // const { data, loading, error } = useSelector(state => state.posts.post);
  const { data, loading, error } = useSelector(state => state.posts.post[postId] || reducerUtils.initial()); // 포스트 데이터 상태 구조 바꾸기 - undefined라면 {}객체 넣기
  const dispatch = useDispatch();

  useEffect(() => {
    if(data) return;
    dispatch(getPost(postId));
    // return () => { // cleanup 함수
    //   dispatch(clearPost());
    // }

  }, [postId, dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return( 
    <>
      <button onClick={ () => dispatch(goToHome())}>홈으로 이동</button>
      <button onClick={ () => dispatch(printState())} >상태 출력</button>
      <Post post={data} />
    </>
  );
}

export default PostContainer;