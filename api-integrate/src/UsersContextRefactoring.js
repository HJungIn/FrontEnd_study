import React, { createContext, useReducer, useContext } from 'react';// 컨텍스트도 만들도 해당 컨텍스트를 사용하는 custom hook도 만들거임
import * as api from './api'; //api.js에 모든 함수들이 api라는 이름의 객체에 들어가진다.
import createAsyncDispatcher, { initialAsyncState, createAsyncHandler } from './asyncActionUtils';

// UsersContext 에서 사용 할 기본 상태
const initialState = {
  users: initialAsyncState,
  user: initialAsyncState
};

// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
// users(get, getsuccess, geterror), user(get, getsuccess, geterror) : 총 6개의 액션
const usersHandler = createAsyncHandler('GET_USERS', 'users'); // 타입:GET_USERS ,키값: users
const userHandler = createAsyncHandler('GET_USER', 'user'); // 타입:GET_USER ,키값: user
function usersReducer(state, action) {
  switch (action.type) {
    case 'GET_USERS':
    case 'GET_USERS_SUCCESS':
    case 'GET_USERS_ERROR':
        return usersHandler(state, action); // createAsyncHandler안의 handler 함수에서 state,action 파라미터와 실행됨
    case 'GET_USER':
    case 'GET_USER_SUCCESS':
    case 'GET_USER_ERROR':
        return userHandler(state, action); // createAsyncHandler안의 handler 함수에서 state,action 파라미터와 실행됨
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

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers); // 첫번째 파라미터: 타입, 두번째 파라미터: promiseFn 
export const getUser = createAsyncDispatcher('GET_USER', api.getUser); // 첫번째 파라미터: 타입, 두번째 파라미터: promiseFn 