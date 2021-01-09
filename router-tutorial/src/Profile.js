import React from 'react';

// 프로필에서 사용 할 데이터
const profileData = {
  velopert: {
    name: 'HJI',
    description:
      'Backend Engineer @ 백엔드 개발자'
  },
  gildong: {
    name: '홍길동',
    description: '전래동화의 주인공'
  }
};

const Profile = ({ match }) => { //Profile에서는 URL파라미터 조회 : match라는 파라미터 사용 => match는 Route 태그의 component부분으로 자동으로 불러온다.
  const { username } = match.params;// 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;