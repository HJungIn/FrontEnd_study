import React, {useRef, useState} from 'react';
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
import CreateUser from './CreateUser';
import UserListArray from './UserListArray';
import UserListUseEffect from './UserListUseEffect';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };
  // const users = [
  const [users, setUsers] = useState([ // 컴포넌트의 상태로써 관리 : useState로 감싸주면됨
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  // ];
  ]);
  const nextId = useRef(4); //useRef로 users의 id값을 저장해준다. ( 어떠한 변수를 기억하고 싶을 때 사용 ) => 리렌더링 필요x : 리렌더링 해도 계속 기억된다.
  const onCreate = () => {

    const user = {
      id: nextId.current,
      username,
      email
    }
    //setUsers의 2가지 방법 : spread , concat => users.push는 사용하면 x 
    setUsers([...users, user]); // 기존 users배열을 spread연산으로 복사 하고 내가 만든 user객체를 추가하여 setUsers를 통해 이를 기존의 users로 set해준다. 
    //setUsers(users.concat(user));
    setInputs({
      username: '',
      email: ''
    });
    console.log(nextId.current); //4
    nextId.current += 1; // 이 값이 바뀐다고 해도 리렌더링이 되지 않는다.
  }

  const [inputs, setInputs] = useState({ // 배열에 항목 추가하기
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  //불변성을 지키며 업데이트 해준다 : filter => 추출 후 새로운 객체를 만들어준다.
  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id =>{ //배열 안에 있는 원소를 업데이트 할 때는 map 함수로 구현가능하다.
    setUsers(users.map(
      user => user.id === id
        ? {...user, active: !user.active} //user값을 받아서 active값만 바꿔준다. => 덮어씌우기x 새 객체 만들어서 지정하기 o =>불변성 유지
        : user
    ));
  };

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

      <>
      {/* 배열 항목 추가하기 : concat*/}
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserListUseRef users={users}/>
      </>

      <>
      {/* 배열 항목 제거하기 : filter + 배열 항목 수정하기 : map */}
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserListArray users={users} onRemove={onRemove} onToggle={onToggle}/>
      </>

      <>
      {/* useEffect를 사용하여 마운트/언마운트/업데이트시 할 작업 설정하기 */}
      <UserListUseEffect users={users} onRemove={onRemove} onToggle={onToggle}/>
      </>
    </div>
  );
}

export default App;
