import React, { useState } from 'react';

type MyFormProps = {
    //form이라는 객체를 파라미터로 가져옴. 해당 객체는 name과 description이 있음, 결과값은 void임
    onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: '', //기본값은 공백
    description: ''
  });

  const { name, description } = form; //비구조화 할당

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {// e 타입을 모를땐 any 로 설정 => 아래 input의 onchange부분에 커서 올리면 나오는 타입 복붙하기
    const {name, value} = e.target;
    setForm({
        ...form,
        [name]: value
    })
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {// e 타입을 모를땐 any 로 설정 => 아래 form의 onsubmit부분에 커서 올리면 나오는 타입 복붙하기
    e.preventDefault(); //새로고침 방지
    onSubmit(form); //이 함수는 여기서 만드는 게 아니라 props로 받아와야하는 것
    setForm({
        name: '',
        description: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;