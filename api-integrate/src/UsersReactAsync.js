import React, { useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import UserReactAsync from './UserReactAsync';

async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
}

function UsersReactAsync() {
  const [userId, setUserId] = useState(null);
//   const { data: users, error, isLoading, reload } = useAsync({ //reload : refetch와 같은 의미 : 데이터를 다시 불러오기
//     promiseFn: getUsers
//   });
  const { data: users, error, isLoading, reload, run } = useAsync({ // run + deferFn으로 버튼 : skip 처럼 버튼을 눌렀을 때 불러오도록 하는 방법 단계1
    deferFn: getUsers
  });

  if (isLoading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
//   if (!users) return <button onClick={reload}>불러오기</button>;
  if (!users) return <button onClick={run}>불러오기</button>; // run + deferFn으로 버튼 : skip 처럼 버튼을 눌렀을 때 불러오도록 하는 방법 단계2

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
      <button onClick={reload}>다시 불러오기</button>
      {userId && <UserReactAsync id={userId} />}
    </>
  );
}

export default UsersReactAsync;