import React, { useState } from 'react'; //열고 닫기 위해서 상태관리 필요
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md'; //더하기 모양 아이콘
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton = styled.button`
  background: #38d9a9; //초록
  &:hover {
    background: #63e6be; //밝아짐
  }
  &:active {
    background: #20c997; // 어두워짐
  }

  z-index: 5; //다른 내용을 가리기 위해서
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%; //가운데
  bottom: 0px; //맨 아래
  transform: translate(-50%, 50%); // 중앙에 오도록

  font-size: 60px; //아이콘의 크기
  color: white; //아이콘 색상
  border-radius: 50%;

  border: none; //테두리 x
  outline: none; //아웃라인 x

  transition: 0.125s all ease-in; //이게 있어야 애니메이션 효과가 나옴
  ${props =>
    props.open && //오픈 되어있을 때
    css`
      background: #ff6b6b; //빨강
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg); // translate(-50%, 50%)값을 유지하면서 45도 돌려준다. => +가 x로 보임
    `} 
`;

const InsertFormPositioner = styled.div` //특정 form의 위치
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form` //글을 쓸 form => div에서 form으로 변환: onSubmit사용하기 위해
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px; // 둥근 모서리가 삐져나오지 않게 함
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef; //상단 테두리
`;

const Input = styled.input` //어떤 내용을 넣을 건지
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box; //박스가 잘 정돈됨
`;

function TodoCreate() {
  const nextId = useTodoNextId(); // TodoContext.js의 custom hook을 바로 가져와서 쓸 수 있다.
  const dispatch = useTodoDispatch();

  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open); // 기존의 값을 반전시켜줌

  const [value, setValue] = useState('');//input에 대한 상태 관리
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = e =>{
    e.preventDefault(); //submit 할 때 마다 새로고침 하는것을 방지한다. => 엔터를 눌러도 새로고침 안일어남
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {/* open되어있을 때는 다른 스타일 */}
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
              {/* autoFocus : 해당 input창이 나왔을 때 자동으로 포커스가 잡히도록 함 */}
            <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" onChange={onChange} value={value}/> 
          </InsertForm>
        </InsertFormPositioner>
      )}

      {/* open이 안되어있을 때 */}
      <CircleButton onClick={onToggle} open={open}> 
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate); //성능 최적화