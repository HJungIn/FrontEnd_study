import React, {useRef, useState, useMemo, useCallback, useReducer} from 'react';
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
import CounterUseReducer from './CounterUseReducer';
import useInputs from './useInputs';

const initialState = { //App 컴포넌트를 useReducer 로 구현하기
  inputs: {
    username: '',
    email: ''
  },
  users: [
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
  ]
};
function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state, //불변성을 지키기 위해
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs, //초기값으로 변환
        users: state.users.concat(action.user) // 합치기
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}

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
  
  const [inputs, setInputs] = useState({ // 배열에 항목 추가하기
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  
  const onCreate = useCallback(() => {

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
  }, [username, email, users]);

  const onChange = useCallback(e => { //useCallback사용
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]); //inputs를 사용하니 넣어줘야함  => inputs가 변화될 때만 이 함수가 사용됨 =>만약에 이 값ㅇ르 넣지 않으면 해당값을 사용할 때 가장 최신값이 아닌 옛날 상태를 참조하게 될 수 있다.

  //불변성을 지키며 업데이트 해준다 : filter => 추출 후 새로운 객체를 만들어준다.
  const onRemove = useCallback(id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback(id =>{ //배열 안에 있는 원소를 업데이트 할 때는 map 함수로 구현가능하다.
    setUsers(users.map(
      user => user.id === id
        ? {...user, active: !user.active} //user값을 받아서 active값만 바꿔준다. => 덮어씌우기x 새 객체 만들어서 지정하기 o =>불변성 유지
        : user
    ));
  }, [users]);

  function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length; // user의 active가 true인 user의 수를 센다.
  }
  // const count = countActiveUsers(users); // useMemo를 안쓰면 리렌더링(input에 글 쓸때마다) 될 때마다 활성사용자 수를 센다.
  const count = useMemo( ()=>countActiveUsers(users), [users]); //useMemo : 특정 값이 바뀌었을 때만 특정 함수를 실행해 값을 받는다.(필요한 연산을 필요할 때만 사용) => 첫번째 파라미터는 함수형태여야함, 두번째 파라미터는 deps(바꿀 변수)여야함 : 2번째에 넣은 값이 변해야만 이 1번째함수를 실행해 주겠다.

  //React.memo 중 users가 바뀔때마다 함수가 실행된다고 하면 users를 바꿀때마다 모든 함수가 리렌더링 되기 때문에 users를 deps에 넣지 않도록 한다.
  const onCreateReactMemo = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers(users => users.concat(user));
    setInputs({
      username: '',
      email: ''
    });
    console.log(nextId.current); 
    nextId.current += 1; 
  }, [username, email]);
  const onRemoveReactMemo = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
  }, []);
  const onToggleReactMemo = useCallback(id =>{ //배열 안에 있는 원소를 업데이트 할 때는 map 함수로 구현가능하다.
    setUsers(users => users.map(
      user => user.id === id
        ? {...user, active: !user.active} //user값을 받아서 active값만 바꿔준다. => 덮어씌우기x 새 객체 만들어서 지정하기 o =>불변성 유지
        : user
    ));
  }, []);


  //useReducer 사용
  const [state, dispatch] = useReducer(reducer, initialState);
  const { usersUseReduce } = state;
  const { usernameUseReduce, emailUseReduce } = state.inputs;
  const onChangeUseReduce = useCallback(e => {
    const { name, value } = e.target; //e에서 추출
    dispatch({ // dispatch:어떻게 업데이트 할 것인지?
      type: 'CHANGE_INPUT',
      name,
      value
    });
  }, []);
  const onCreateUseReduce = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        usernameUseReduce,
        emailUseReduce
      }
    });
    nextId.current += 1;
  }, [usernameUseReduce, emailUseReduce]);
  const onToggleUseReduce = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemoveUseReduce = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  //custom Hook
  const [form, onChangeCustom, resetCustom] = useInputs({
    username: '',
    email: ''
  });
  const {usernameCustom, emailCustom} = form;
  const onCreateCustom = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        usernameCustom,
        emailCustom
      }
    });
    nextId.current += 1;
    resetCustom();
  }, [usernameCustom, emailCustom, resetCustom]);
  const onToggleCustom = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemoveCustom = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

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

      <>
      {/* useMemo 를 사용하여 연산한 값 재사용하기 */}
      <div>활성사용자 수 : {count}</div> 
      </>

      <>
      {/* React.memo 를 사용한 컴포넌트 리렌더링 방지 */}
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreateReactMemo}
      />
      <UserListUseEffect users={users} onRemove={onRemoveReactMemo} onToggle={onToggleReactMemo}/>
      </>

      <>
      {/* useReducer 를 사용하여 상태 업데이트 로직 분리하기 */}
      <CounterUseReducer />

      {/* App 컴포넌트를 useReducer 로 구현하기 */}
      <CreateUser 
        username={usernameUseReduce} 
        email={emailUseReduce} 
        onChange={onChangeUseReduce} 
        onCreate={onCreateUseReduce}
      />
      <UserListUseEffect users={state.users} onRemove={onRemoveUseReduce} onToggle={onToggleUseReduce}/>
      {/* <UserListUseEffect users={usersUseReduce} onRemove={onRemoveUseReduce} onToggle={onToggleUseReduce}/> <= 이게 원래 정석인데 현재 코드에서는 안돌아감.. 너무 합쳐져 있어서 그럴수도*/}
      </>

      <>
      {/* custom Hook 만들기 */}
      </>
    </div>
  );
}

export default App;
