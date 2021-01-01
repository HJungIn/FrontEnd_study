import React, { useState, useRef } from 'react'; // useRef 넣기

function InputSampleUseRef() {
    const [inputs, setInputs] = useState({ 
        name:'',
        nickname:''
    });
    const nameInput = useRef(); // useRef 사용
    const {name, nickname} = inputs;

  const onChange = (e) => {
        const {name, value} = e.target;      
        console.log(e.target.name); 
        console.log(e.target.value);

        setInputs({ 
            ...inputs, 
            [name]: value
        });
  };

  const onReset = () => {
      setInputs({
        name:'',
        nickname:''
      });
      nameInput.current.focus(); // nameInput이 들어있는 DOM에 집중시키는것 : 포커스를 잡는것
  };


  return (
    <div>
      <input 
        name="name" 
        placeholder="이름" 
        onChange={onChange} 
        value={name}
        ref={nameInput} // 선택하고 싶은 DOM에 ref 설정을 한다. => 직접 접근이 가능해짐
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

export default InputSampleUseRef;