import React, { useEffect } from 'react'; // 컴포넌트가 마운트 될때 사용하기 위한 useEffect
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts';

function PostListContainer() {
  const { data, loading, error } = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {// 컴포넌트 마운트 후 포스트 목록 요청
    // if(data) return; //이미데이터가 있다면 아무것도 하지 말 것
    dispatch(getPosts()); //module.posts
  }, [dispatch]); //hook을 이용해서 쓴거니 dispatch 써주기

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return <PostList posts={data} />;
}

export default PostListContainer;