import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default React.memo(CreateUser); //props가 바뀌었을 때만 리렌더링 해준다.
// export default React.memo(CreateUser, (prevProps, nextProps) => prevProps.users === nextProps.users); //users의 값이 같다면 리렌더링 하지 x : React.memo 에서 두번째 파라미터에 propsAreEqual 이라는 함수를 사용하여 특정 값들만 비교를 하는 것도 가능