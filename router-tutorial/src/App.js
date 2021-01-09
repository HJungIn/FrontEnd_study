import React from 'react';
import { Route, Link } from 'react-router-dom'; // Route : 특정 주소에 특정 컴포넌트를 보여주겠다. || Link : 특정 링크를 눌렀을 때 다른 경로로 가고싶을 때 사용하는 컴포넌트 (a태그 사용x)
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
import Profile from './Profile';
import Profiles from './Profiles';

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
      </>
    </div>
  );
};

export default App;