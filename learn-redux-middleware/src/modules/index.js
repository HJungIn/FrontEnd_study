import { combineReducers } from 'redux'; //루트 리듀서 만들기
import counter from './counter';
import posts from './posts'; //posts 적용하기

const rootReducer = combineReducers({ counter, posts }); 

export default rootReducer;