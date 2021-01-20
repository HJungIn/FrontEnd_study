// import {deprecated, createAction, ActionType, createReducer} from 'typesafe-actions';
// 액션 타입 선언
/*
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO'; // 할일을 껏다켰다
const REMOVE_TODO = 'todos/REMOVE_TODO'; // 제거

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
*/
/*
// 모든 액션 객체들에 대한 타입 준비 => 리팩토링
const actions = {
    addTodo,
    toggleTodo,
    removeTodo
};
type TodosAction = ActionType<typeof actions>;

// 모든 액션 객체들에 대한 타입 준비
// type TodosAction =
//   | ReturnType<typeof addTodo>
//   | ReturnType<typeof toggleTodo>
//   | ReturnType<typeof removeTodo>;


// 상태에서 사용 할 할 일 항목 데이터 타입 정의 => 컴포넌트에서도 쓸거라 export
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

// 이 모듈에서 관리할 상태는 Todo 객체로 이루어진 배열
export type TodosState = Todo[];
*/
/*
// 초기 상태 선언
const initialState: TodosState = [];

// 리듀서 작성
// function todos(
//   state: TodosState = initialState,
//   action: TodosAction
// ): TodosState {
//   switch (action.type) {
//     case ADD_TODO:
//       return state.concat({
//         id: action.payload.id,// action.payload 객체 안의 값이 모두 유추됩니다.
//         text: action.payload.text,
//         done: false
//       });
//     case TOGGLE_TODO:
//       return state.map(todo =>
//         // payload 가 number 인 것이 유추됩니다.
//         todo.id === action.payload ? { ...todo, done: !todo.done } : todo
//       );
//     case REMOVE_TODO:
//       // payload 가 number 인 것이 유추됩니다.
//       return state.filter(todo => todo.id !== action.payload);
//     default:
//       return state;
//   }
// }

//리듀서 작성 리팩토링
const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, action) =>
      state.concat({
        ...action.payload, // id, text 를 이 안에 넣기
        done: false
      }),   
    // 비구조화 할당을 활용하여 payload 값의 이름을 바꿀 수 있음
    [TOGGLE_TODO]: (state, { payload: id }) =>
      state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    [REMOVE_TODO]: (state, { payload: id }) =>
      state.filter(todo => todo.id !== id)
  });

export default todos;
*/

export { default } from './reducer'; // reducer 를 불러와서 default로 내보내겠다는 의미
export * from './actions'; // 모든 액션 생성함수들을 불러와서 같은 이름들로 내보내겠다는 의미
export * from './types'; // 모든 타입들을 불러와서 같은 이름들로 내보내겠다는 의미