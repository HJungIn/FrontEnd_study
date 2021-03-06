import logo from './logo.svg';
import React from 'react';
import Button from './components/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">Button</Button>
        <Button>Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">Button</Button>
        <Button color="gray">Button</Button>
        <Button color="gray" size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">Button</Button>
        <Button color="pink">Button</Button>
        <Button color="pink" size="small">Button</Button>
      </div>

      {/* outline */}
      <div className="buttons">
        <Button color="blue" size="large" outline>Button</Button> 
        <Button color="gray" outline>Button</Button>
        <Button color="pink" size="small" outline>Button</Button>
      </div>

      {/* fullwidth */}
      <div className="buttons">
        <Button color="blue" size="large" fullWidth>Button</Button> 
        <Button color="gray" fullWidth>Button</Button>
        <Button color="pink" size="small" fullWidth>Button</Button>
      </div>

      {/* ...rest를 이용한 값 전달 */}
      <div className="buttons">
        <Button 
        color="blue" 
        size="large" 
        fullWidth onClick={() => console.log('클릭됐다!')}  //...rest로 들어감
        onMouseMove={()=>{console.log('마우스무브!');}} //...rest로 들어감
        >
          Button!!!
        </Button> 
      </div>
    </div>
  );
}

export default App;
