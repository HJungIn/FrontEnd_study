//getUser(s) 쪽 리팩토링
export default function createAsyncDispatcher(type, promiseFn) { // 이 함수는 파라미터로 액션의 타입 (예: GET_USER) 과 Promise 를 만들어주는 함수를 받아온다.
    // 성공, 실패에 대한 액션 타입 문자열을 준비한다.
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;
  
    // 새로운 함수를 만든다.
    async function actionHandler(dispatch, ...rest) {// ...rest 를 사용하여 나머지 파라미터를 rest 배열에 담기
      dispatch({ type }); // 요청 시작됨
      try {
        const data = await promiseFn(...rest); // rest 배열을 spread 로 넣어줍니다. || promiseFn을 쓰기 위해 await 작성
        dispatch({
          type: SUCCESS,
          data
        }); // 성공함
      } catch (e) {
        dispatch({
          type: ERROR,
          error: e
        }); // 실패함
      }
    }
  
    return actionHandler; // 만든 함수를 반환.
  }



// 리듀서 쪽 리팩토링
  export const initialAsyncState = {
    loading: false,
    data: null,
    error: null
  };

  const loadingState = {
    loading: true,
    data: null,
    error: null
  };
  
  const success = data => ({
    loading: false,
    data,
    error: null
  });
  
  const error = error => ({
    loading: false,
    data: null,
    error: error
  });
  
  // 세가지 액션을 처리하는 리듀서를 만들어줍니다
  export function createAsyncHandler(type, key) { // type 은 액션 타입, key 는 리듀서에서 사용할 필드의 키 이름 (예: user, users)
    // 성공, 실패에 대한 액션 타입 문자열을 준비
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;
  
    // 함수를 새로 만들어서
    function handler(state, action) {
      switch (action.type) {
        case type:
          return {
            ...state,
            [key]: loadingState //특정 키를 loadingState로 변환한다.
          };
        case SUCCESS:
          return {
            ...state,
            [key]: success(action.data)
          };
        case ERROR:
          return {
            ...state,
            [key]: error(action.error)
          };
        default:
          return state;
      }
    }
  
    return handler;// 반환
  }