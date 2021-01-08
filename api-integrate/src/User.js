import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
    //api를 요청하게 될 때의 꼭 필요한 3가지의 상태 관리
  const [users, setUsers] = useState(null); //1. 결과물 (요청의 결과)
  const [loading, setLoading] = useState(false); //2. 로딩 (현재 api가 요청중인지 아닌지)
  const [error, setError] = useState(null); //3. 에러

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      // loading 상태를 true 로 바꾸기 : 로딩이 시작되었다.
      setLoading(true);

      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(response.data); // 데이터는 response.data 안에 들어있다
    } catch (e) {
      console.log(e.response.status);
      setError(e);
    }
    setLoading(false); //로딩이 끝났다.
  };

  useEffect(() => { //컴포넌트가 처음 렌더링 될때 어떤 작업을 하겠다.
    fetchUsers(); //호출
  }, []);

  if (loading) return <div>로딩중..</div>; //만약 로딩중이라면
  if (error) return <div>에러가 발생했습니다</div>; //에러 발생 시 
  if (!users) return null; //user가 유효하지 않은 값이라면

  return (
    <>
    <ul>
      {users.map(user => ( //users 값들에 대해, key값을 꼭 넣어주기
        <li key={user.id}> 
          {user.username} ({user.name})
        </li>
      ))}
    </ul>

    {/* 버튼 하나를 만들어서 해당 버튼을 누를 때마다 api에서 가져오는 법 */}
    <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

export default Users;