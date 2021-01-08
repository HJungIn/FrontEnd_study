import React from 'react';
import Users from './User';
import UsersUseReduce from './UsersUseReduce';

function App() {
  return (
    <>
      {/* useState와 useEffect로 데이터 로딩하기 */}
      <Users />

      {/* useReducer 로 요청 상태 관리하기 */}
      <UsersUseReduce />
    </>
  );
}

export default App;
