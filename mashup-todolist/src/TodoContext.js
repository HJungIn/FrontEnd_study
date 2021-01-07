import React, { useReducer, createContext, useContext, useRef } from 'react'; // nextId값을 관리하기 위해 useRef사용 : 상태로 관리하는게 아닌 바로 그값을 변화시킬수 있도록 하기 위해

const initialTodos = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: true
    },
    {
        id: 2,
        text: '컴포넌트 스타일링하기',
        done: true
    },
    {
        id: 3,
        text: 'Context 만들기',
        done: false
    },
    {
        id: 4,
        text: '기능 구현하기',
        done: false
    }
];

/*
    CREATE : 새 항목 추가
    TOGGLE : 껏다 켰다
    REMOVE : 지우기
*/
function todoReducer(state, action){
    switch ( action.type ){
        case 'CREATE' :
            return state.concat(action.todo); //액션 안의 todo 항목을 넣어서 dispatch해준다
        case 'TOGGLE' :
            return state.map( //모든 todo에 대하여 변환을 한다.
                todo => todo.id === action.id ? {...todo, done: !todo.done} : todo //id가 같다면 done을 전환해준다.
            );
        case 'REMOVE' :
            return state.filter(todo => todo.id !== action.id); //id값이 일치하는 것만 사라지는 것
        
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext(); //새로운 todo가 생성될 때마다 id가 증가하도록 해주는 context

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initialTodos); //state를 위한 컨텍스트, dispatch를 위한 컨텍스트 필요
    const nextId = useRef(5);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

//custom hook => 사용법 : const state = useTodoState();
export function useTodoState(){
    const context = useContext(TodoStateContext)
    if(!context){
        throw new Error('Cannot find TodoProvider'); // 컨텍스트가 없을 때의 에러 처리
    }
    return context;
}
export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext);
    if(!context){
        throw new Error('Cannot find TodoProvider'); // 컨텍스트가 없을 때의 에러 처리
    }
    return context;
}
export function useTodoNextId(){
    const context = useContext(TodoNextIdContext);
    if(!context){
        throw new Error('Cannot find TodoProvider'); // 컨텍스트가 없을 때의 에러 처리
    }
    return context;
}