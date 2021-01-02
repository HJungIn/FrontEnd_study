import React, { useReducer } from 'react';  //useReducer사용

//1. reducer 함수를 만든다.
function reducer(state, action) { // 현재 state(타입은 모두 가능)와 액션(이름 직접 설정가능) 가져오기
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
        // throw new Error('unhandled action');
    }
  }


function CounterUseReducer() {

    const [number, dispatch] = useReducer(reducer, 0)//dispatch : 액션을 발생시키는 함수 || reducer함수 사용, 0이 기본값

    const onIncrease = () =>{
        dispatch({
            type: 'INCREMENT'
        })
    }
    const onDecrease = () =>{
        dispatch({
            type: 'DECREMENT'
        })
    }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button> 
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default CounterUseReducer;