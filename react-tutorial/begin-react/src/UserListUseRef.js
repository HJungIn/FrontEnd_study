import React from 'react';

function User({user}){
    return(
        <div>
        <b>{user.username}</b> <span>({user.email})</span>
      </div>
    );
}

function UserListUseRef({ users }) {
  return (
    <div>      
      {
          users.map(
              user => (<User user={user} key={user.id} />) 
          )
      }
    </div>
  );
}

export default UserListUseRef;