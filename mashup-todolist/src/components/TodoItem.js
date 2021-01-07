import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md'; //체크, 쓰레기통 아이콘 사용 

const CheckCircle = styled.div` //check아이콘
  width: 32px;
  height: 32px;
  border-radius: 16px; //동그라미 || 50%
  border: 1px solid #ced4da; //회색
  font-size: 24px; //아이콘 크기
  display: flex;
  align-items: center; //체크가 동그라미 중앙에 오도록 함
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done && //done이 존재한다면 
    css` //여러줄의 스타일을 작성하기 위해 css 사용
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div` //텍스트
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da; //done이 들어온다면 연한 회색으로
    `}
`;

const Remove = styled.div` //remove아이콘
  opacity: 0; //안보이도록함
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b; //호버시 빨간색으로 보여짐
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center; //세로정렬
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover { //해당 아이템 블록에 마우스를 갖다 대었을 때 
    ${Remove} { //remove가 보이도록 한다 => remove를 특정 상횡(hover)에만 보여주고 싶을 때 사용
      opacity: 1;
    }
  }
`;


function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;