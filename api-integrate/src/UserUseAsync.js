import React from 'react';
import axios from 'axios';
import useAsync from './useAsync';

async function getUser(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}` //백키 사용 후 템플릿 리터럴 사용
  );
  return response.data;
}

function UserUseAsync({ id }) { //id값을 props로 받아오게 한다.
  const [state] = useAsync(() => getUser(id), [id]); //useAsync사용 - refetch가 필요없어서 state만 사용함 || deps : [id]라는 것은 id값이 바뀔 때 마다 () => getUser(id) 함수를 호출하겠다라는 의미
 
  const { loading, data: user, error } = state;
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

export default UserUseAsync;