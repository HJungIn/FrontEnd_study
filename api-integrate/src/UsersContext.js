import React, { createContext, useReducer, useContext } from 'react';// 컨텍스트도 만들도 해당 컨텍스트를 사용하는 custom hook도 만들거임
import axios from 'axios'; //api를 요청할수있게

// UsersContext 에서 사용 할 기본 상태
const initialState = {
  users: { //users API요청해서 가져온걸 여기에 담을 것이다
    loading: false,
    data: null,
    error: null
  },
  user: { // 특정 user의 데이터도 가져올것임
    loading: false,
    data: null,
    error: null
  }
};

// 로딩중일 때 바뀔 상태 객체 => users, user의 데이터를 대체하는 작업
const loadingState = {
  loading: true,
  data: null,
  error: null
};

// 성공했을 때의 상태 만들어주는 함수 => users, user의 데이터를 대체하는 작업
const success = data => ({
  loading: false,
  data,
  error: null
});

// 실패했을 때의 상태 만들어주는 함수 => users, user의 데이터를 대체하는 작업
const error = error => ({
  loading: false,
  data: null,
  error: error
});

// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
// users(get, getsuccess, geterror), user(get, getsuccess, geterror) : 총 6개의 액션
function usersReducer(state, action) {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: loadingState //아까 만들었던 loadingState 사용
      };
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: success(action.data)
      };
    case 'GET_USERS_ERROR':
      return {
        ...state,
        users: error(action.error)
      };

    case 'GET_USER':
      return {
        ...state,
        user: loadingState
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        user: success(action.data)
      };
    case 'GET_USER_ERROR':
      return {
        ...state,
        user: error(action.error)
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

// State 용 Context 와 Dispatch 용 Context 따로 만들어주기
const UsersStateContext = createContext(null); //상태를 위한 컨텍스트, 기본값:null
const UsersDispatchContext = createContext(null); //dispatch를 위한 컨텍스트, 기본값:null

// 위에서 선언한 두가지 Context 들의 Provider 로 감싸주는 컴포넌트
export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState); //초기상태는 initialState
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
}

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useUsersState() {
  const state = useContext(UsersStateContext);
  if (!state) {
    throw new Error('Cannot find UsersProvider');
  }
  return state;
}

// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useUsersDispatch() {
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UsersProvider');
  }
  return dispatch;
}

//api 호출 함수 - 이 함수에서는 api 요청만 하는게 아니라 api요청전의 특정액션을 dispatch 하고, api가 성공하거나 실패했을 때도 특정 액션을 dispatch한다.
export async function getUsers(dispatch) { //dispatch는 파라미터로 받아와서 사용
    dispatch({ type: 'GET_USERS' }); //가져오기 시작할 것이다.
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      dispatch({ type: 'GET_USERS_SUCCESS', data: response.data }); //성공
    } catch (e) {
      dispatch({ type: 'GET_USERS_ERROR', error: e }); //실패
    }
 }

//api 호출 함수
export async function getUser(dispatch, id) {// 특정 id를 파라미터로 받아온다.
   dispatch({ type: 'GET_USER' });
   try {
     const response = await axios.get(
       `https://jsonplaceholder.typicode.com/users/${id}`
     );
     dispatch({ type: 'GET_USER_SUCCESS', data: response.data });
   } catch (e) {
     dispatch({ type: 'GET_USER_ERROR', error: e });
   }
}