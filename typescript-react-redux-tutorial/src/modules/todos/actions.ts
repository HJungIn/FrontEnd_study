import {deprecated, createAction, ActionType, createReducer} from 'typesafe-actions';

export const ADD_TODO = 'todos/ADD_TODO' as const;
export const TOGGLE_TODO = 'todos/TOGGLE_TODO'; // 할일을 껏다켰다
export const REMOVE_TODO = 'todos/REMOVE_TODO'; // 제거

let nextId = 1; // 새로운 항목을 추가 할 때 사용 할 고유 ID 값

// 액션 생성 함수
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text
  }
});

// export const toggleTodo = (id: number) => ({
//   type: TOGGLE_TODO,
//   payload: id
// });

// export const removeTodo = (id: number) => ({
//   type: REMOVE_TODO,
//   payload: id
// });

//리팩토링
// 이 액션 생성 함수의 경우엔 파라미터를 기반하여 커스터마이징된 payload를 설정해주므로, createAction 이라는 함수를 사용합니다.
// export const addTodo = createAction(ADD_TODO, action => (text: string) =>// 여기서 action은 액션 객체를 만드는 함수입니다
//   action({
//     id: nextId++,
//     text
//   })
// );
export const toggleTodo = deprecated.createStandardAction(TOGGLE_TODO)<number>();// number을 payload로 갖고 온다
export const removeTodo = deprecated.createStandardAction(REMOVE_TODO)<number>();
