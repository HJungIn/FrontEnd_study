import React, { useEffect } from 'react'; 

function HistorySample({ history }) { // history는 props를 통해 받아온다
  const goBack = () => {
    history.goBack(); //뒤로가기
  };

  const goHome = () => {
    history.push('/'); //특정 경로로 이동하기
  };

  const replaceToHome = () =>{ //방문기록(출발하는 현재의 페이지에 대한 기록)을 남기지 않고 해당 페이지로 이동한다.
    history.Replace('/'); //여기에서 뒤로 눌렀을 때는 뒤로가기2번누른것과 같은 의미
  };

  useEffect(() => { //컴포넌트가 처음 마운트 되었을 때, history를 콘솔에 출력하기
    console.log(history);
    const unblock = history.block('정말 떠나실건가요?'); //이탈 방지
    return () => { // 컴포넌트가 unmount될 때
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      <button onClick={goHome}>홈으로 (Replace)</button>
    </div>
  );
}

export default HistorySample;