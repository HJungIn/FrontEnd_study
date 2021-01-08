import React from 'react';
import axios from 'axios';
import { useAsync } from 'react-async'; //react-async 사용

async function getUser({ id }) { // 객체 형태로 받아와서 비구조화할당을 해줄것임
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

function UserReactAsync({ id }) {
  const { data: user, error, isLoading } = useAsync({ //loading대신에 isLoading 사용
    promiseFn: getUser, //promise를 반환하는 함수
    id,
    watch: id //id 값이 바뀌면 getUser에 윗줄의 id를 넣고 재호출 할 것이다 : deps와 비슷한 의미
  });

  if (isLoading) return <div>로딩중..</div>;
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

export default UserReactAsync;