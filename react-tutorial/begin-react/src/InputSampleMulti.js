import React, { useState } from 'react';

function InputSampleMulti() {
    const [inputs, setInputs] = useState({ // 객체인 상태를 가져온다.
        name:'',
        nickname:''
    });
    const {name, nickname} = inputs;

  const onChange = (e) => {
        const {name, value} = e.target;      
        console.log(e.target.name); // name, nickname
        console.log(e.target.value); // 내가 input에 쓰는 값

        /*
        const nextInputs = {
            ...inputs, // spread 문법 => 기존의 상태를 한번 복사하고 특정값을 덮어씌운다. => 불변성을 지켜준다.
            [name]: value
        };
 
        setInputs(nextInputs); //input이 여러개라 객체를 set으로 넣어줘야한다. 
        */
        setInputs({ //이렇게 바로 쓰는 것도 가능
            ...inputs, 
            [name]: value
        });
  };

  const onReset = () => {
      setInputs({
        name:'',
        nickname:''
      });
  };


  return (
    <div>
      <input 
        name="name" 
        placeholder="이름" 
        onChange={onChange} 
        value={name}
      />
      <input 
        name="nickname" 
        placeholder="닉네임" 
        onChange={onChange} 
        value={nickname}
      />

      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSampleMulti;