import React from 'react';
import Counter from './Counter';
import Greetings_func from './Greetings';
import Greetings from './Greetings';
import MyForm from './MyForm';

const App: React.FC = () => {
  const onClick = (name: string) =>{
    console.log(name);
  };

  const onSubmit = (form: {name:string, description: string}) => {
    console.log(form);
  };

  return (
    <>
    {/* 타입스크립트로 리액트 컴포넌트 만들기 */}
    {/* React.FC으로 기본값, 디폴트값 정할 때 */}
    {/* <Greetings name="리액트"/> */}

    {/* function으로 기본값, 디폴트값 정할 때 */}
    {/* <Greetings_func name="리액트" onClick={onClick}/> */}

    {/* 리액트 상태관리 */}
    {/* 카운터 만들기 - useState, 이벤트*/}
    <Counter />
    {/* MyForm 만들기 - useState, 이벤트 */}
    <MyForm onSubmit={onSubmit}/>
    
    </>
  );
}

export default App;
