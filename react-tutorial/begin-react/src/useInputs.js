import { useState, useCallback } from 'react';

function useInputs(initialForm) { // 초기값 관리
  const [form, setForm] = useState(initialForm); 
  // change
  const onChangeCustom = useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);
  const resetCustom = useCallback(() => setForm(initialForm), [initialForm]); // 이 form을 초기화한다.
  return [form, onChangeCustom, resetCustom]; // 배열형태로 return함
}

export default useInputs;