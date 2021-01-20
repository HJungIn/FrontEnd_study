import React from 'react';
import Greetings_func from './Greetings';
import Greetings from './Greetings';

const App: React.FC = () => {
  const onClick = (name: string) =>{
    console.log(name);
  };

  return (
    <>
    {/* React.FC으로 기본값, 디폴트값 정할 때 */}
    {/* <Greetings name="리액트"/> */}

    {/* function으로 기본값, 디폴트값 정할 때 */}
    <Greetings_func name="리액트" onClick={onClick}/>
    </>
  );
}

export default App;
