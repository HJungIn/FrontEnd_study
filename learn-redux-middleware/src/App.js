import React from 'react';
import CounterContainer from './containers/CounterContainer';
import PostListContainer from './containers/PostListContainer';
import {Route} from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

function App() {
  // return <CounterContainer />;
  // return <PostListContainer />;
  return(
    <>
      {/* 사가 사용 */}
      <CounterContainer />

      {/* 라우터 연동 */}
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostPage} />
    </>
  )
}

export default App;