import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center; //세로 정렬
  justify-content: center; //가로 정렬
  background: rgba(0, 0, 0, 0.8);
`;

const DialogBlock = styled.div` //창
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 { //제목
    margin: 0;
    font-size: 1.5rem;
  }
  p { //내용
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div` //여백 및 정렬
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const ShortMarginButton = styled(Button)` //특정 Button을 상속받아서 덮어쓰기
  & + & {
    margin-left: 0.5rem;
  }
`;

function Dialog({ title, children, confirmText, cancelText, visible, onConfirm, onCancel }) { // 제목, 내용, 확인, 취소
  if(!visible) return null;
   return (
    <DarkBackground>
      <DialogBlock>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginButton color="gray" onClick={onCancel} >{cancelText}</ShortMarginButton> 
          <ShortMarginButton color="pink" onClick={onConfirm} >{confirmText}</ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}

Dialog.defaultProps = {
  confirmText: '확인',
  cancelText: '취소'
};

export default Dialog;