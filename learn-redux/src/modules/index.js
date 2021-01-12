// 루트 리듀서 : 두가지의 리덕스 모듈(counter, todos)을 만든 후 생긴 2개의 리듀서를 한 리듀서로 합쳐서 사용
import { combineReducers } from 'redux';
import counter from './counter'; //counter리듀서
import todos from './todos'; //todos리듀서

const rootReducer = combineReducers({ //루트 리듀서 만들기
  counter,
  todos
});

export default rootReducer;