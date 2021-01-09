import React from 'react';
import { withRouter } from 'react-router-dom';

const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly /> {/* Json으로 이루어진 객체를 문자열로 변환해 주는 것, null 2 는 들여쓰기가 된다는 뜻 */}
      
      <h4>match</h4> {/* 현재 자신이 렌더링 된 위치를 기준으로 match값을 받아온다. */}
      <textarea value={JSON.stringify(match, null, 2)} readOnly />
      <button onClick={() => history.push('/')}>홈으로</button>
    </div>
  );
};

export default withRouter(WithRouterSample); //컴포넌트를 내보내기 전에 사용 => WithRouterSample이 Route용으로 사용되지 않았다 하더라도 location, match, history를 사용할 수 있다. 