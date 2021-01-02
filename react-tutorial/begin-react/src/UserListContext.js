import React, { useEffect, useContext } from 'react';
import {UserDispatch} from './App'; //export const UserDispatch = createContext(null); 해줘서 import 해줄 수 있다.


const User = React.memo( function User({ user }) {
    const {username, email, id, active} = user;
    const dispatch = useContext(UserDispatch);

  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    return () => { 
      console.log('user 가 바뀌기 전..');
      console.log(user);
    };
  }, [user]); 

  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => dispatch( {
            type: 'TOGGLE_USER',
            id
        })}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => dispatch({
          type: 'REMOVE_USER',
          id
      }) }>삭제</button>
    </div>
  );
}); //props가 바뀌었을 때만 리렌더링 해준다.

function UserListContext({ users }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
        />
      ))}
    </div>
  );
}

export default React.memo(UserListContext); //props가 바뀌었을 때만 리렌더링 해준다.