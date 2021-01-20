import { TodosState, TodosAction } from './types';
import { createReducer } from 'typesafe-actions';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';

// 초기 상태 선언
const initialState: TodosState = [];

// 리듀서 작성
const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) =>
    state.concat({
      ...action.payload, // id, text 를 이 안에 넣기
      done: false
    }),
  // 바구조화 할당을 활용하여 payload 값의 이름을 바꿀 수 있음
  [TOGGLE_TODO]: (state, action) =>
    state.map(todo => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo)),
  [REMOVE_TODO]: (state, action) =>
    state.filter(todo => todo.id !== action.payload)
});

export default todos;