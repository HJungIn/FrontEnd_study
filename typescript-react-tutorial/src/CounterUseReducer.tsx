import React, { useReducer } from 'react';

//1. 액션에 대한 타입을 하나의 타입에다가 다 정리해놓기
type Action = { type: 'INCREASE' } | { type: 'DECREASE' }; // 이렇게 액션을 | 으로 연달아서 쭉 나열하세요.

//2. reducer작성
function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

//3. reducer사용
function CounterUseReducer() {
  const [count, dispatch] = useReducer(reducer, 0); // reducer을 사용하고 기본값 0
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default CounterUseReducer;