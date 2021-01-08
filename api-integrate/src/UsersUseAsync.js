import React, { useState } from 'react'; //UserUseAsync를 사용하기 위해 useState불러오기
import axios from 'axios';
import useAsync from './useAsync';
import UserUseAsync from './UserUseAsync';

async function getUsers() { // useAsync 사용할 때 callback으로 넣어줄 함수
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
}

function UsersUseAsync() {
  const [state, refetch] = useAsync(getUsers, [], true); //deps의 기본값은 비어있는 배열 = 컴포넌트가 처음 렌더링될 때 이를 호출한다. ([] 생략가능) || skip : 특정 버튼을 눌렀을 때만 API 를 요청하고 싶다면 사용(처음 렌더링 될 때는 버튼만 나오도록 true로 설정)
  const [userId, setUserId] = useState(null); // list의 한 부분을 클릭했을 때 해당 user의 id를 받아와 보여주기 위해 사용
  
  const { loading, data: users, error } = state;
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
//   if (!users) return null;

  if (!users) return <button onClick={refetch}>불러오기</button>; //특정 버튼을 눌렀을 때만 API 를 요청하고 싶다면 사용

  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}  onClick={()=>setUserId(user.id)}> {/* useId를 선택해서 해당 id값이 유효할 때만 아래 컴포넌트를 보여줄 수 있도록 onClick에 UserId를 set 시켜준다.*/}
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button> 

      {/* useId를 선택해서 해당 id값이 유효할 때만 UseUseAsync컴포넌트를 보여준다. */}
      { userId && <UserUseAsync id={userId} /> }
    </>
  );
}

export default UsersUseAsync;