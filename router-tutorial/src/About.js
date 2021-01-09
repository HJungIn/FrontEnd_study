import React from 'react';
import qs from 'qs';

function About({ location }) { //쿼리를 조회할 때는 props를 통해서 location을 받아와서 조회 가능
  console.log(location); // 콘솔에 찍히는 search부분의 ?a=1을 추출하기 위해 qs 패키지를 다운한다.(yarn add qs)
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true //search부분의 ?를 빼고 파싱하기 위해 (객체 형태로)
  });

  const detail = query.detail === 'true'; //문자열로 들어오기 때문에 문자열 형태로 비교하기

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>

      {detail &&  // detail이 true일 때 특정 내용을 더 보여준다.
      <p> detail 값이 true입니다.</p>}

    </div>
  );
}

export default About;