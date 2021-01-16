import { combineReducers } from 'redux'; //루트 리듀서 만들기
import counter, { counterSaga } from './counter';
import posts, { postsSaga } from './posts'; //posts 적용하기
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ counter, posts }); 

//루트 사가
export function* rootSaga() {
    yield all([counterSaga(), postsSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;