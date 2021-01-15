import * as postsAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기
import { createPromiseThunk, handleAsyncActions, reducerUtils } from '../lib/asyncUtils';

/* 1. 액션 타입 */
//Api 요청시 각 api마다 3개의 액션을 만든다고 생각하면 됨 : 시작, 성공, 실패
// 포스트 여러개 조회하기
const GET_POSTS = 'GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

//포스트 페이지에서 벗어날 때 post의 상태를 초기화 시키기 위한 액션
const CLEAR_POST = 'CLEAR_POST';

/* 2. 각 프로미스마다 thunk 함수를 만들어주어야 합니다 */
// // thunk 를 사용 할 때, 꼭 모든 액션들에 대하여 액션 생성함수를 만들 필요는 없습니다.
// // 그냥 thunk 함수에서 바로 액션 객체를 만들어주어도 괜찮습니다.
// export const getPosts = () => async dispatch => { // asycn await 사용
//   dispatch({ type: GET_POSTS }); // 요청이 시작됨
//   try {
//     const posts = await postsAPI.getPosts(); // API 호출
//     dispatch({ type: GET_POSTS_SUCCESS, posts }); // 성공
//   } catch (e) {
//     dispatch({ type: GET_POSTS_ERROR, error: e }); // 실패
//   }
// };

// // thunk 함수에서도 파라미터를 받아와서 사용 할 수 있습니다.
// export const getPost = id => async dispatch => {
//   dispatch({ type: GET_POST }); // 요청이 시작됨
//   try {
//     const post = await postsAPI.getPostById(id); // API 호출
//     dispatch({ type: GET_POST_SUCCESS, post }); // 성공
//   } catch (e) {
//     dispatch({ type: GET_POST_ERROR, error: e }); // 실패
//   }
// };

//createPromiseThunk 사용해서 thunk함수 만들기 -> 최적화 한 것
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
// export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);
export const getPost = id => async dispatch => { // 포스트 데이터 상태 구조 바꾸기 =>post의 thunk함수
  dispatch({type: GET_POST, meta:id}); //리듀서에서 이 id 값을 참고해서 상태 업데이트
  try{
    const payload = await postsAPI.getPostById(id);
    dispatch({type:GET_POST_SUCCESS, payload, meta:id})
  } catch (e){
    dispatch({
      type: GET_POST_ERROR,
      payload:e,
      error: true,
      meta: id
    })
  }
}
export const clearPost = () => ({type:CLEAR_POST});

const initialState = {
//   posts: {
//     loading: false,
//     data: null,
//     error: null
//   },
//   post: {
//     loading: false,
//     data: null,
//     error: null
//   }
  posts: reducerUtils.initial(),
  // post: reducerUtils.initial()
  post: {}// 포스트 데이터 상태 구조 바꾸기
};

//handleAsyncActions 사용하기
const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true);
// const getPostReducer = handleAsyncActions(GET_POST, 'post');
const getPostReducer = (state, action) =>{// 포스트 데이터 상태 구조 바꾸기 - 리듀서 직접 작성
  const id = action.meta;
  switch(action.type){
    case GET_POST:
      return {
        ...state,
        post: {
          ...state.post,
          [id]: reducerUtils.loading(state.post[id] && state.post[id].data) // undefined일때의 오류를 막기 위해
        }
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: {
          ...state.post,
          [id]: reducerUtils.success(action.payload)
        }
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: {
          ...state.post,
          [id]: reducerUtils.error(action.payload)
        }
      };    
    default:
      return state;
  }
}

/* 3. 리듀서에서 액션에 따라 로딩중, 결과, 에러 상태를 변경 */
export default function posts(state = initialState, action) { 
//   switch (action.type) {
//     case GET_POSTS:
//       return {
//         ...state,
//         posts: {
//           loading: true,
//           data: null,
//           error: null
//         }
//       };
//     case GET_POSTS_SUCCESS:
//       return {
//         ...state,
//         posts: {
//           loading: false,
//           data: action.posts,
//           error: null
//         }
//       };
//     case GET_POSTS_ERROR:
//       return {
//         ...state,
//         posts: {
//           loading: false,
//           data: null,
//           error: action.error
//         }
//       };

//     case GET_POST:
//       return {
//         ...state,
//         post: {
//           loading: true,
//           data: null,
//           error: null
//         }
//       };
//     case GET_POST_SUCCESS:
//       return {
//         ...state,
//         post: {
//           loading: false,
//           data: action.post,
//           error: null
//         }
//       };
//     case GET_POST_ERROR:
//       return {
//         ...state,
//         post: {
//           loading: false,
//           data: null,
//           error: action.error
//         }
//       };
//     default:
//       return state;
//   }

  /* 리덕스 모듈 리팩토링 */
//   switch (action.type) {
//     case GET_POSTS:
//       return {
//         ...state,
//         posts: reducerUtils.loading() //나중에 값을 유지하고다면 posts: reducerUtils.loading(state.posts.data)
//       };
//     case GET_POSTS_SUCCESS:
//       return {
//         ...state,
//         posts: reducerUtils.success(action.payload)
//       };
//     case GET_POSTS_ERROR:
//       return {
//         ...state,
//         posts: reducerUtils.error(action.payload)
//       };
//     case GET_POST:
//       return {
//         ...state,
//         post: reducerUtils.loading()
//       };
//     case GET_POST_SUCCESS:
//       return {
//         ...state,
//         post: reducerUtils.success(action.payload)
//       };
//     case GET_POST_ERROR:
//       return {
//         ...state,
//         post: reducerUtils.error(action.payload)
//       };
//     default:
//       return state;
//   }

  /* handleAsyncActions를 사용한 리팩토링 */
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
        return getPostsReducer(state, action); //위 3개의 옵션중 하나라면 이함수 실행

    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
        return getPostReducer(state, action);
    case CLEAR_POST:
        return {
          ...state,
          post: reducerUtils.initial()
        };    
    default:
      return state;
  }
}