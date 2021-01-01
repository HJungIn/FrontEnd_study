import React, { useEffect } from 'react';

const User = React.memo( function User({ user, onRemove, onToggle }) {
    // useEffect : 첫번째 파라미터는 함수를 등록하고, 2번째 파라미터는 deps(의존변수,함수)를 등록한다.
  /*
    useEffect(() => {
      //마운트(처음 나타날 때) 시 하는 작업 : props 로 받은 값을 컴포넌트의 로컬 상태로 설정, 외부 API 요청 (REST API 등), 라이브러리 사용 (D3, Video.js 등, setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약
    console.log('컴포넌트가 화면에 나타남');
    return () => { // ==> 클린 함수
        //return 하면 언마운트(사라질 때) 시 하는 작업 : setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout), 라이브러리 인스턴스 제거
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []); // deps:의존되는 값들로 비어있을 때는 컴포넌트가 시작될 때만 나옴
  */
 
  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    return () => { // 클린 함수
      console.log('user 가 바뀌기 전..');
      console.log(user);
    };
  }, [user]); // user의 값이 생성되고 바뀔 때마다 호출된다. => 값을 가리켜야지 최신의 값을 유지한다.
 /*
  useEffect(() => {
    console.log(user); //모든 컴포넌트에서 실행된다. => 브라우저상에서는 바뀐부분만 보여줌 하지만 virtualDOM에서는 user이 모두 리렌더링 된다.
  });
*/
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}); //props가 바뀌었을 때만 리렌더링 해준다.

function UserListUseEffect({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserListUseEffect); //props가 바뀌었을 때만 리렌더링 해준다.