import { combineReducers } from 'redux'; //루트 리듀서 만들기
import counter from './counter';

const rootReducer = combineReducers({ counter });

export default rootReducer;