/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주기(ex)counter/SET_DIFF) : 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
const SET_DIFF = 'counter/SET_DIFF'; //counter에서 몇씩 더하고 뺄지 정하는것
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/* 액션 생성함수 만들기 : 액션 생성함수를 만들고 export 키워드를 사용해서 내보내주세요.*/
export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/* 초기 상태 선언 (리듀서에서 관리할 초기 상태)*/
const initialState = {
  number: 0,
  diff: 1 //몇씩 뺴고 더할 건지
};

/* 리듀서 선언 : 리듀서는 export default 로 내보내주세요.*/
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff //대체해주기
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff //더하기
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff //빼기
      };
    default:
      return state; //default는 state
  }
}