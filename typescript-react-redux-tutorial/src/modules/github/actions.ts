import { deprecated, createAsyncAction } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';
import { AxiosError } from 'axios';

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

//액션 생성함수 : createStandardAction 사용한거
// export const getUserProfile = deprecated.createStandardAction(GET_USER_PROFILE)();
// export const getUserProfileSuccess = deprecated.createStandardAction(GET_USER_PROFILE_SUCCESS)<GithubProfile>();
// export const getUserProfileError = deprecated.createStandardAction(GET_USER_PROFILE_ERROR)<AxiosError>(); //Axios에서 에러발생시 사용하는 객체 타입 

//액션 생성함수 : createAsyncAction 사용한거
export const getUserProfileAsync = createAsyncAction(
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_ERROR
)<undefined, GithubProfile, AxiosError>();
