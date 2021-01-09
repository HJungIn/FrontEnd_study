import React from 'react';
// import { Link, Route } from 'react-router-dom';
import { NavLink, Route } from 'react-router-dom'; //link 대신에 NavLink 사용
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          {/* <Link to="/profiles/velopert">velopert</Link> Link to로 경로 넣어주기 */}
          <NavLink
            to="/profiles/velopert"
            activeStyle={{ background: 'black', color: 'white' }} //주소가 일치하다면 스타일 바꾸기
            activeClassName="active" //스타일이 아니라 CSS 클래스를 적용하시고 싶을 때
            // isActive={(match, location) =>{ //어떤 함수가 true를 반환하면 특정 스타일을 주고 싶을 때
            //     return match.params.blbla = 'asdf'; //return true를 하면 activeStyle이 적용되고 false면 적용x
            // }}
            // exact
          >
            velopert
          </NavLink>
        </li>
        <li>
          {/* <Link to="/profiles/gildong">gildong</Link> */}
          <NavLink
            to="/profiles/gildong"
            activeStyle={{ background: 'black', color: 'white' }}
          >
            gildong
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요.</div>} //render에는 특정 컴포넌트를 안넣고 바로 함수형 컴포넌트를 선언해 넣어줄 수 있다.
      />
      <Route path="/profiles/:username" component={Profile} />

      {/* withRouter 사용 */}
      <WithRouterSample />
    </div>
  );
};

export default Profiles;