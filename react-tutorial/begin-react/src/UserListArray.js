import React from 'react';

function User({ user, onRemove }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
      {/* onClick이 눌렸을 때는 user.id를 받아와 새로운 함수를 만들어 onRemove()함수를 호출한다. */}
      {/* onClick={onRemove(user.id)} 으로 쓰면 안되는 이유 : 렌더링 되는 시점에 바로 onRemove함수가 실행되기 때문이다. */}
      <button onClick={() => onRemove(user.id)}>삭제</button> 
    </div>
  );
}

function UserListArray({ users, onRemove }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default UserListArray;