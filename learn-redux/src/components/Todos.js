/* 프리젠테이셔널 컴포넌트 구현 */
import React, { useState } from 'react';

// 컴포넌트 최적화를 위하여 React.memo를 사용
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) { //할 일 항목 하나
  return (
    <li
      style={{ textDecoration: todo.done ? 'line-through' : 'none' }} //done값이 true면 line-through 
      onClick={() => onToggle(todo.id)} //todo가 지니는 id를 같이 넘겨준다.
    >
      {todo.text}
    </li>
  );
});

// 컴포넌트 최적화를 위하여 React.memo를 사용
const TodoList = React.memo(function TodoList({ todos, onToggle }) { //여러개의 할 일 항목들
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});


function Todos({ todos, onCreate, onToggle }) { //TodoList랑 자체적으로 새 항목을 등록할 수 있는 form
  
  const [text, setText] = useState('');// 로컬상태로 관리하기. => 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야하는 것은 아님.
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text);
    setText(''); // 인풋 초기화
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할 일을 입력하세요.."
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
}

export default React.memo(Todos); // 컴포넌트 최적화를 위하여 React.memo를 사용