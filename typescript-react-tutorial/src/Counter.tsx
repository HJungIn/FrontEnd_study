import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0); //useState<number>(0): count의 타입이 number이고 기본값이 0이다 => 제너릭 생략가능
    const onIncrease = () => setCount(count+1);
    const deIncrease = () => setCount(count-1);

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={deIncrease}>-1</button>
            </div>
        </div>
    );
}

export default Counter;