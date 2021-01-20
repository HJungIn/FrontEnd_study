import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodoApp from './containers/TodoApp';

function App() {
  return (
    <>
      {/* 타입스크립트와 리덕스  */}
      {/* 카운터 - 기초 */}
      <CounterContainer />

      {/* 투두리스트 만들기 */}
      <TodoApp />
    </>
  );
}

export default App;
