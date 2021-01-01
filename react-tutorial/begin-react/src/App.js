import React, {useRef} from 'react';
import Hello from './Hello'; //상대경로(.js 생략가능)
import HelloWithProps from './HelloProps';
import './App.css';
import Wrapper from './Wrapper'; //아래서 바로쓰면 자동으로 import됨
import HelloWithCondition from './HelloCondition';
import Counter from './Counter';
import InputSample from './InputSample';
import InputSampleMulti from './InputSampleMulti';
import InputSampleUseRef from './InputSampleUseRef';
import UserList from './UserList';
import UserListUseRef from './UserListUseRef';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];
  const nextId = useRef(4); //useRef로 users의 id값을 저장해준다. ( 어떠한 변수를 기억하고 싶을 때 사용 ) => 리렌더링 필요x : 리렌더링 해도 계속 기억된다.
  const onCreate = () => {
    console.log(nextId.current); //4
    nextId.current += 1; // 이 값이 바뀐다고 해도 리렌더링이 되지 않는다.
  }
  return (
    <div>
      <>
       {/* JSX */}
       {/* 어쩌고저쩌고 */} 
       <Hello 
            // 이런식으로도 주석 달기 가능
       />
      <Hello />
      <div>안녕히 계세요</div>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
      </>

      <>
      {/* props */}
      <HelloWithProps name="react" color="red"/>
      <HelloWithProps color="pink"/>
      <Wrapper > 
        <HelloWithProps name="react" color="red"/>
        <HelloWithProps color="pink"/>
      </Wrapper>
      </>

      <>
      {/* 조건부 렌더링 */}
      <HelloWithCondition name="react" color="red" isSpecial={true}/>
      {/* <HelloWithCondition name="react" color="red" isSpecial /> */}
      </>

      <>
      {/* useState를 통해 컴포넌트에서 바뀌는 값 - counter로 실습*/}
      <Counter />      
      </>

      <>
      {/* 리액트에서 input 상태 관리하기 */}
      <InputSample />

      {/* 여러개의 input 상태 관리하기 */}
      <InputSampleMulti />
      </>

      <>
      {/* useRef로 특정 DOM 선택하기 */}
      <InputSampleUseRef />
      </>

      <>
      {/* 배열 렌더링 하기*/}
      <UserList />
      </>

      <>
      {/* useRef로 useRef로 컴포넌트 안의 변수 만들기 */}
      <UserListUseRef users={users}/>
      </>
    </div>
  );
}

export default App;
