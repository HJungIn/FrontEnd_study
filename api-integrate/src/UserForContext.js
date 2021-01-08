import React, { useEffect } from 'react'; // 이 컴포넌트가 처음 렌더링 될 때 데이터를 요청해야 되니까 useEffect 사용 
import { useUsersState, useUsersDispatch, getUser } from './UsersContext';

function UserForContext({ id }) {
  const state = useUsersState(); // context 사용
  const dispatch = useUsersDispatch(); // context 사용

  useEffect(() => { // useEffect 를 사용해서 id 값이 바뀔 때마다 getUser() 함수를 호출
    getUser(dispatch, id); //getUser() 함수를 호출 할 때에는 두번째 파라미터에 현재 props 로 받아온 id 값을 넣어준다.
  }, [dispatch, id]);

  const { data: user, loading, error } = state.user; // state.user에서 조회

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

export default UserForContext;