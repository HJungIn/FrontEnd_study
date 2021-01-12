/* 컨테이너 컴포넌트 : 리덕스 스토어의 상태를 조회하거나, 액션을 디스패치 할 수 있는 컴포넌트를 의미 ⇒ HTML 태그들을 사용하지 않고 다른 프리젠테이셔널 컴포넌트들을 불러와서 사용 */
import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux'; //useSelector: 상태 조회를 위해 || useDispatch: 디스패치하기 위해
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
  
  const { number, diff } = useSelector(state => ({// useSelector는 리덕스 스토어의 상태를 조회하는 Hook. state의 값 == store.getState() 함수를 호출했을 때 나타나는 결과물 == 리덕스의 현재상태
    number: state.counter.number,
    diff: state.counter.diff
  }));
  
  const dispatch = useDispatch(); // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook
  const onIncrease = () => dispatch(increase());// 각 액션들을 디스패치하는 함수들1 (modules의 counter부분의 함수)
  const onDecrease = () => dispatch(decrease());// 각 액션들을 디스패치하는 함수들2
  const onSetDiff = diff => dispatch(setDiff(diff));// 각 액션들을 디스패치하는 함수들3

  return (
    <Counter //Counter 컴포넌트 렌더링
      // 상태와
      number={number}
      diff={diff}

      // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;