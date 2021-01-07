import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1; // 자신이 차지할 수 있는 모든영역을 차지할 수 있다. 
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto; //스크롤바
  /* background: gray; //사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

function TodoList() {
    const todos = useTodoState(); // TodoContext.js의 custom hook을 바로 가져와서 쓸 수 있다.
    console.log(todos);
  return (
    <TodoListBlock>
      {todos.map(
        todo => <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} /> //todo를 TodoItem으로 변환해주기
      )}
    </TodoListBlock>
  );
}

export default TodoList;