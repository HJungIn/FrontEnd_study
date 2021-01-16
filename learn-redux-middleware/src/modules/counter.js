import {delay, put, takeEvery, takeLatest, takeLeading} from 'redux-saga/effects'; //effects : redux-saga 미들웨어가 수행하도록 작업을 명령하는 것(기다리기, 수행하기)

// 액션 타입
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

//사가는 generator함수를 사용
function* increaseSaga() {
  yield delay(1000); // 1초를 기다리기 => 리덕스 미들웨어에게 특정 잡업을 명령하기 위해서는 effect를 yield해준다.
  yield put(increase()); // put은 특정 액션을 디스패치 해줍니다.
}
function* decreaseSaga() {
  yield delay(1000); // 1초를 기다리기
  yield put(decrease()); // put은 특정 액션을 디스패치 해줍니다.
}

//takeEvery, takeLatest 함수들은 액션을 모니터링하는 함수
// 1. takeEvery는 특정 액션 타입에 대하여 디스패치되는 모든 액션들을 처리하는 것 
// 2. takeLatest는 특정 액션 타입에 대하여 디스패치된 가장 마지막 액션만을 처리하는 함수
export function* counterSaga() { //어떤 액션이 dispatch되었을 때, 어떤 작업을 수행할 지를 정해주는 것 => export해줄것
  yield takeEvery(INCREASE_ASYNC, increaseSaga); // 모든 INCREASE_ASYNC 액션을 처리
  yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
  // yield takeLeading(DECREASE_ASYNC, decreaseSaga); // 가장 먼저 들어온것 처리
}


//딜레이 만들기 : 특정 thunk함수가 dispatch되면 1초 후에 increase를 dispatch하고 decrease를 dispatch하도록 함
// export const increaseAsync = () => dispatch => { // dispatch => 부터 1000); 까지만 thunk함수
//   setTimeout(() => dispatch(increase()), 1000);
// };
// export const decreaseAsync = () => dispatch => {
//   setTimeout(() => dispatch(decrease()), 1000);
// };


// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
