import React from 'react';
//하나의 컴포넌트 파일에 2개의 컴포넌트를 불러도 괜찮음
function User({user}){ // 이걸로 더 간편하게 보여줄 수 있다.
    return(
        <div>
        <b>{user.username}</b> <span>({user.email})</span>
      </div>
    );
}

function UserList() {
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
  return (
    <div>
      {/* <div> //1번 방법:그냥 쭉 쓰기
        <b>{users[0].username}</b> <span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b> <span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b> <span>({users[1].email})</span>
      </div> */}

      {/* <User user= {users[0]} /> //2번 방법:User컴포넌트로 하나씩 쓰기
      <User user= {users[1]} />
      <User user= {users[2]} /> */}
      
      {
          users.map(
              user => (<User user={user} key={user.id} />) //3번 방법 : map을 이용해서 배열에 있는값 모두 보여주기 , 고유값인 id로 설정해줘야한다.
          )
        //   users.map(
        //     (user, index) => (<User user={user} key={index} />) //4번 방법 : 키가 없을 때 index를 쓰지만 성능이 좋아지는건 아님.
        // )
        // key : 각 배열의 원소가 어떤것을 가리키고 있는지 알도록 꼭 필요하다. => 고유값을 키로 설정해 주면 배열이 추가되거나 삭제될 때 해당 Dom이 추가되고 해당 Dom이 삭제된다. 
        //      => 없으면 추가될때 해당 원소부터 다시 쓰게 됨으로 비효율적이다.(삭제도 마찬가지) => index로 쓰는것도 추천하지는 않지만 배열의 갯수가 작을때는 ㄱㅊ.
      }
    </div>
  );
}

export default UserList;