import { ActionType, createReducer, deprecated } from 'typesafe-actions';

// 1. 액션 타입을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
// const INCREASE = 'counter/INCREASE' as const;
// const DECREASE = 'counter/DECREASE' as const;
// const INCREASE_BY = 'counter/INCREASE_BY' as const;
const INCREASE = 'counter/INCREASE'; //리팩토링
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

// 2. 액션 생성함수를 선언합니다
// export const increase = () => ({
//   type: INCREASE
// });

// export const decrease = () => ({
//   type: DECREASE
// });

// export const increaseBy = (diff: number) => ({
//   type: INCREASE_BY,
//   // 액션에 부가적으로 필요한 값을 payload 라는 이름으로 통일합니다
//   // 이는 FSA (https://github.com/redux-utilities/flux-standard-action) 라는 규칙인데
//   // 이 규칙을 적용하면 액션들이 모두 비슷한 구조로 이루어져있게 되어 추후 다룰 때도 편하고
//   // 읽기 쉽고, 액션 구조를 일반화함으로써 액션에 관련돤 라이브러리를 사용 할 수 있게 해줍니다.
//   // 다만, 무조건 꼭 따를 필요는 없습니다.
//   payload: diff //액션의 모양새를 통일시킴으로써 개발에 편의성을 준다.
// });

export const increase = deprecated.createStandardAction(INCREASE)(); //리팩토링
export const decrease = deprecated.createStandardAction(DECREASE)();
export const increaseBy = deprecated.createStandardAction(INCREASE_BY)<number>(); // payload 타입을 Generics 로 설정해주세요.


type CounterState = {// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다 => 상태에 대한 type 생성해야함
  count: number;
};

// 초기상태를 선언합니다.
const initialState: CounterState = {
  count: 0
};

// 모든 액션 겍체들에 대한 타입을 준비해줍니다.
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
// type CounterAction =
//   | ReturnType<typeof increase> // ReturnType<typeof ___함수명__> 는 특정 함수의 반환값을 추론해줍니다
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increaseBy>;

// 액션 객체 타입 준비 => 리팩토링
const actions = { increase, decrease, increaseBy }; // 모든 액션 생성함수들을 actions 객체에 넣습니다
type CounterAction = ActionType<typeof actions>; // ActionType 를 사용하여 모든 액션 객체들의 타입을 준비해줄 수 있습니다


// 3.리듀서를 작성합니다.
// 리듀서에서는 state 와 함수의 반환값이 일치하도록 작성하세요.
// function counter(
//   state: CounterState = initialState,
//   action: CounterAction // 액션에서는 우리가 방금 만든 CounterAction 을 타입으로 설정
// ): CounterState {
//   switch (action.type) {
//     case INCREASE: // case 라고 입력하고 Ctrl + Space 를 누르면 어떤 종류의 action.type들이 있는지 확인 할 수 있습니다.
//       return { count: state.count + 1 };
//     case DECREASE:
//       return { count: state.count - 1 };
//     case INCREASE_BY:
//       return { count: state.count + action.payload };
//     default:
//       return state;
//   }
// }

// 리듀서를 만듭니다 => 리팩토링 : 오브젝트 맵 형태
// createReducer 는 리듀서를 쉽게 만들 수 있게 해주는 함수입니다.
// Generics로 리듀서에서 관리할 상태, 그리고 리듀서에서 처리 할 모든 액션 객체들의 타입을 넣어야합니다
// const counter = createReducer<CounterState, CounterAction>(initialState, {
//     [INCREASE]: state => ({ count: state.count + 1 }), // 액션을 참조 할 필요 없으면 파라미터로 state 만 받아와도 됩니다
//     [DECREASE]: state => ({ count: state.count - 1 }),
//     [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }) // 액션의 타입을 유추 할 수 있습니다.
//   });
  

// 리듀서를 만듭니다 => 체이닝으로 리팩토링 => 이건 CounterAction 생략 가능
// createReducer 는 리듀서를 쉽게 만들 수 있게 해주는 함수입니다.
// Generics로 리듀서에서 관리할 상태, 그리고 리듀서에서 처리 할 모든 액션 객체들의 타입을 넣어야합니다
const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, state => ({ count: state.count + 1 }))
  .handleAction(decrease, state => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload
  }));

export default counter;