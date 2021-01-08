import React, { useState } from 'react';
import { useUsersState, useUsersDispatch, getUsers } from './UsersContext';
import User from './User';
import UserForContext from './UserForContext';

function UsersForContext() {
  const [userId, setUserId] = useState(null);
  const state = useUsersState(); // context 사용
  const dispatch = useUsersDispatch(); // context 사용

  const { data: users, loading, error } = state.users; // state.users에서 값을 조회함
  
  const fetchData = () => {
    getUsers(dispatch); //getUsers에 dispatch 를 넣어서 호출
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map(user => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: 'pointer' }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <UserForContext id={userId} />}
    </>
  );
}

export default UsersForContext;