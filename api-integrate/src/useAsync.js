import { useReducer, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useAsync(callback, deps = [], skip = false) { // callback : api를 호출하는 함수 || deps : useEffect를 사용해서 컴포넌트가 로딩됐을때,값이 변경됐을때 api 재요청 || skip : //특정 버튼을 눌렀을 때만 API 를 요청하고 싶다면 사용
  const [state, dispatch] = useReducer(reducer, { //reducer사용
    loading: false,
    data: null,
    error: false
  });

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
      if(skip){ //특정 버튼을 눌렀을 때만 API 를 요청하고 싶다면 사용
          return;
      }
    fetchData();
    // : eslint 설정을 다음 줄에서만 비활성화(//부분 포함)
    // eslint-disable-next-line 
  }, deps);

  return [state, fetchData]; //useAsync를 통해서 첫번째 값:현재상태, 두번째 값:특정 요청을 다시 시작하는 함수 를 받아와서 사용한다.
}

export default useAsync;