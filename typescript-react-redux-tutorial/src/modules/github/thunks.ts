import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { GithubAction } from './types';
import { getUserProfile } from '../../api/github';
import { getUserProfileAsync } from './actions';
import { Dispatch } from 'react';
import createAsyncThunk from '../../lib/createAsyncThunk';

// 1번 방법
export function getUserProfileThunk(username: string): ThunkAction<void, RootState, null, GithubAction> { //<void, RootState, null, GithubAction> : 리턴 타입, 상태, Thunk.withExtraArgument의 타입(없으니까 null), action들의 타입 
  return async dispatch => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

//2번 방법
// export function getUserProfileThunk(username: string) { //<void, RootState, null, GithubAction> : 리턴 타입, 상태, Thunk.withExtraArgument의 타입(없으니까 null), action들의 타입 
//     return async (dispatch: Dispatch) => {
//       const { request, success, failure } = getUserProfileAsync;
//       dispatch(request());
//       try {
//         const userProfile = await getUserProfile(username);
//         dispatch(success(userProfile));
//       } catch (e) {
//         dispatch(failure(e));
//       }
//     };
//   }

//이렇게 하면 리팩토링 가능해짐 => 뭔가 변경되었으므로 에러 발생함
// export const getUserProfileThunk = createAsyncThunk(getUserProfileAsync, getUserProfile);