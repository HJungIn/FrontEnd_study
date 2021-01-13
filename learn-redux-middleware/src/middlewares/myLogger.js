const myLogger = store => next => action => { //연달아서 작성
    console.log(action); // 먼저 액션을 출력하기
    console.log('\tPrev: ', store.getState());
    const result = next(action); // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달함
    console.log('\tNext: ', store.getState()); // \t: tab || 액션이 리듀서에서 처리가 된 후에 그 다음 상태를 가져와서 콘솔에 출력하기
    return result; // 여기서 반환하는 값은 dispatch(action)의 결과물이 된다.== container에서 넘어온값 || 기본: undefined
  };
  
  export default myLogger;