import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/velopert">velopert</Link> {/* Link to로 경로 넣어주기 */}
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요.</div>} //render에는 특정 컴포넌트를 안넣고 바로 함수형 컴포넌트를 선언해 넣어줄 수 있다.
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;