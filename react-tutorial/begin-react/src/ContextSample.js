import React, {createContext, useContext, useState } from 'react'; //createContext, useContext는 내장함수

const MyContext = createContext('defaulValue'); // Context 만들기 : 기본값 넣기
function Child(){
    const text = useContext(MyContext); // 생성한 Context를 가져와 사용하는 것
    return <div>안녕하세여? {text}</div>
}
function Parent({text}){
    return <Child />
}
function GrandParent({text}){
    return <Parent />
}
function ContextSample(){
    const [value, setValue] = useState(true);
    return (
        //MyContext의 값을 지정해 주고 싶다면 => Context이름.Provider을 사용해야한다. => text를 따로 넣어줄 필요 x => 여기서 context지정했다면 parent를 거치지않고 child에서 바로 가져다 쓸 수 있음
        // <MyContext.Provider value="GOOD">
        <MyContext.Provider value={value ? 'GOOD' : 'Bad'}>
            <GrandParent /> 
            <button onClick={()=> setValue(!value)}>Click me</button>
        </MyContext.Provider>
    )
}

export default ContextSample;