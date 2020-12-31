import React, { useState } from 'react'; //{useState} 불러오기

function Counter() {
    const [number, setNumber] = useState(0); //구조분해 => 기본 값은 0, number은 현재상태, setNumber은 이 number의 상태를 바꾸는 함수

    const onIncrease = () =>{
        setNumber(prevNumber => prevNumber+1); //함수형 업데이트 => 성능 최적화
        // setNumber(number+1); // number의 값을 바꾸며 다음 상태로 넘어감
        console.log('+1');
    }
    const onDecrease = () =>{
        setNumber(prevNumber => prevNumber-1); //함수형 업데이트 => 성능 최적화
        // setNumber(number-1);
        console.log('-1');
    }

  return (
    <div>
      <h1>{number}</h1>
      {/* onIncrease() 이렇게 넣으면 렌더링과 동시에 그냥 실행이 되어버리므로 onIncrease라고만 넣어준다. */}
      <button onClick={onIncrease}>+1</button> 
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;