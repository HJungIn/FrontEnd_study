import React from 'react';

type CounterProps = {
  count: number;
  onIncrease: () => void; //아무것도 반환하지 않는 함수
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void; //diff를 파라미터로 받되 반환하는건 없음
}

function Counter({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy
}: CounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}

export default Counter;