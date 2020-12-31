import React, {useState} from 'react';

function InputSample() {
    const [text, setText] = useState('');

    const onChange = (e)=>{ // e:input에서 수정 이벤트가 발생 했을 때 그 이벤트에 대한 내용이 이벤트 파라미터로 받아와서 사용할 수 있다.      
        setText(e.target.value);
        console.log(e.target.value); // 이 이벤트가 + 일어난 DOM에 대한 정보 + 의 값 : input에 넣은 수정값
    }

    const onReset = () => {
        setText('');
    }

  return (
    <div>
      <input onChange={onChange} value={text}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {text}
      </div>
    </div>
  );
}

export default InputSample;