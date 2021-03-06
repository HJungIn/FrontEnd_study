import React from 'react';
import Users from './User';
import UsersUseAsync from './UsersUseAsync';
import UsersUseReduce from './UsersUseReduce';
import UsersReactAsync from './UsersReactAsync';
import { UsersProvider } from './UsersContext';
import UsersForContext from './UsersForContext';
// import { UsersProvider } from './UsersContextRefactoring'; //리팩토링 시 사용할 UsersProvider

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

      {/* Context와 함께 사용하기 ex)현재 로그인된 사용자의 정보 etc */}
      <UsersProvider >
        <UsersForContext />
      </UsersProvider>

      {/* Context와 함께 사용하기 -> 근데 이를 리팩토링 하여 사용하기
      <UsersProvider > ==> UserContextRedactoring.js에 있는 UsersProvider
        <UsersForContext />
      </UsersProvider> */}
    </>
  );
}

export default App;
