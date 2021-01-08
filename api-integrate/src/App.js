import React from 'react';
import Users from './User';
import UsersUseAsync from './UsersUseAsync';
import UsersUseReduce from './UsersUseReduce';
import UsersReactAsync from './UsersReactAsync';

function App() {
  return (
    <>
      {/* useState와 useEffect로 데이터 로딩하기 */}
      <Users />

      {/* useReducer 로 요청 상태 관리하기 */}
      <UsersUseReduce />

      {/* useAsync 커스텀 Hook 만들어서 사용하기 */}
      <UsersUseAsync />

      {/* react-async 라이브러리를 이용해 요청 상태 관리하기*/}
      <UsersReactAsync />
    </>
  );
}

export default App;
