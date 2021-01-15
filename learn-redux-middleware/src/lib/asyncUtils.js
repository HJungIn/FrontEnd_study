// createPromiseThunk : Promise에 기반한 Thunk를 만들어주는 함수입니다.
export const createPromiseThunk = (type, promiseCreator) => { // type : 요청들에 대해 요청이 시작했음을 알려주는 타입 (GET_POSTS) || promiseCreator : postsAPI.getPosts()처럼 Promise를 만들어주는 함수
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  
    /* thunk 함수를 만들기 */
    // 이 함수는 promiseCreator가 단 하나의 파라미터만 받는다는 전제하에 작성되었습니다.
    // 만약 여러 종류의 파라미터를 전달해야하는 상황에서는 객체 타입의 파라미터를 받아오도록 하면 됩니다.
    // 예: writeComment({ postId: 1, text: '댓글 내용' });
    // FSA(Flux Standard Action) 규칙 : payload로 통일, error시 error를 true로 변환
    return param => async dispatch => {
      // 요청 시작
      dispatch({ type, param }); //로딩 상태 활성화
      try {
        const payload = await promiseCreator(param);// 결과물의 이름을 payload 라는 이름으로 통일한다. posts,post등 이름이 다르면 최적화가 어려워지기 때문에
        dispatch({ type: SUCCESS, payload }); // 성공
      } catch (e) {
        dispatch({ type: ERROR, payload: e, error: true }); // 실패
      }
    };
  };
  
  
  // 리듀서에서 사용 할 수 있는 여러 유틸 함수들입니다.
  export const reducerUtils = {
    // 초기 상태. 초기 data 값은 기본적으로 null 이지만 바꿀 수도 있습니다.
    initial: (data = null) => ({
      loading: false,
      data,
      error: null
    }),
    // 로딩중 상태. prevState의 경우엔 기본값은 null 이지만 따로 값을 지정하면 null 로 바꾸지 않고 다른 값을 유지시킬 수 있습니다.
    loading: (prevState = null) => ({
      loading: true,
      data: prevState,
      error: null
    }),
    // 성공 상태
    success: payload => ({
      loading: false,
      data: payload,
      error: null
    }),
    // 실패 상태
    error: error => ({
      loading: false,
      data: null,
      error
    })
  };

// 비동기 관련 액션들을 처리하는 리듀서를 만들어줍니다.
export const handleAsyncActions = (type, key, keepData) => { // type 은 액션의 타입, key 는 상태의 key (예: posts, post), keepData : 이 값이 true로 주어지면 로딩을 할 때에도 데이터를 유지하게함
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => { //3가지 액션에 대한 리듀서
      switch (action.type) {
        case type:
          return {
            ...state,
            [key]: reducerUtils.loading(keepData ? state[key].data : null)
          };
        case SUCCESS:
          return {
            ...state,
            [key]: reducerUtils.success(action.payload)
          };
        case ERROR:
          return {
            ...state,
            [key]: reducerUtils.error(action.payload)
          };
        default:
          return state;
      }
    };
  };