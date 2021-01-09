import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'; // Route : 특정 주소에 특정 컴포넌트를 보여주겠다. || Link : 특정 링크를 눌렀을 때 다른 경로로 가고싶을 때 사용하는 컴포넌트 (a태그 사용x) || Switch : 규칙이 일치하는 라우트 단 하나만을 렌더링
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
import Profile from './Profile';
import Profiles from './Profiles';
import RouterHookSample from './RouterHookSample';
import WithRouterSample from './WithRouterSample';

const App = () => {
  return (
    <div>

      <>
      {/* 특정 주소에 따라 다른 결과물을 보여주는 방법 */}
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link> {/* 서브라우트에서 사용 */}
        </li>
        <li>
          <Link to="/history">예제</Link> {/* 리액트 부가기능 - history 객체에서 사용 */}
        </li>
      </ul>

      <hr />
      
      <Route path="/" component={Home} exact /> {/* exact : 경로가 완전히 /로 일치할 때만 보여주겠다! 라는 의미 */}
      <Route path="/about" component={About} />
      </>

      <>
      {/* 파라미터와 쿼리 */}
      <Route path="/profiles/:username" component={Profile} /> {/* URL 파라미터 */}
      {/* <Route path="/about" component={About} /> */} {/* 쿼리는 About 컴포넌트에 설정 */}
      </>

      <>
      {/* 서브 라우트 */}
      <Route path="/profiles" component={Profiles} />
      </>

      <>
      {/* 리액트 부가기능 */}
      
      {/* 1. history 객체 */}
      <Route path="/history" component={HistorySample} />

      {/* 2. withRouter */}
      <WithRouterSample />

      {/* 3. Switch : 페이지를 못찾았을 때 유용 */}
      <Switch>{/* 매칭되는 맨위의 하나만 보여줌 -> 그러다가 못찾으면 맨 아래까지 가서 not found 컴포넌트 출력 */}
        <Route path="/" exact={true} component={Home} /> 
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => ( // path 를 따로 정의하지 않으면 모든 상황에 렌더링됨
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>

      {/* 4. NavLink */}
      {/* Profiles.js 에서 Link대신에 사용해보았다. */}
      </>

      <>
      {/* useReactRouter Hook 사용  */}
      <RouterHookSample />
      </>
    </div>
  );
};

export default App;