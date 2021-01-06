import React, { useState, useEffect } from 'react'; // 트랜지션에서 사라지는 효과를 구현하려면 현재 트랜지션 효과를 보여주고 있는 중이라는 상태를 의미하는 animate과 실제로 컴포넌트가 사라지는 시점을 지연시키기 위한 localVisible 값을 Dialog 컴포넌트에서 두개의 로컬 상태를 관리해주어야 한다.
import styled, { keyframes,css } from 'styled-components'; //트랜지션 효과를 위해 keyframes 사용
import Button from './Button';

//트랜지션
const fadeIn = keyframes` //서서히 나타남
  from { //시작
    opacity: 0
  }
  to { //끝
    opacity: 1
  }
`;

const slideUp = keyframes` //위로 올라감
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const fadeOut = keyframes` //서서히 나타남
  from { //시작
    opacity: 1
  }
  to { //끝
    opacity: 0
  }
`;

const slideDown = keyframes` //위로 올라감
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
`;

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

  animation-duration: 0.25s; //얼마나 지속될 지
  animation-timing-function: ease-out; // 처음에는 빨랐다가 느려짐
  animation-name: ${fadeIn};
  animation-fill-mode: forwards; // 애니메이션이 끝나고 어떻게 할 건지: 유지

  ${props => props.disappear && css`
    animation-name: ${fadeOut};
  `}
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

  animation-duration: 0.25s; //얼마나 지속될 지
  animation-timing-function: ease-out; // 처음에는 빨랐다가 느려짐
  animation-name: ${slideUp}};
  animation-fill-mode: forwards; // 애니메이션이 끝나고 어떻게 할 건지: 유지

  ${props => props.disappear && css`
    animation-name: ${slideDown};
  `}
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
    //사라지게 하기 위해
    const [animate, setAnimate] = useState(false); // 지금 애니메이션의 상태를 보여주고 있다는 animate라는 상태 필요 : 현재 애니메이션 보여지는 중(참,거짓) 
    const [localVisible, setLocalVisible] = useState(visible); // 현재 상태가 true에서 false로 전환되고 있다를 감지해내기 위해 필요 : dialog자체적인
  
    useEffect(() => {
      // localVisible사용이유 : visible 값이 true -> false 가 되는 것을 감지
      if (localVisible && !visible) {
        setAnimate(true); //애니메이트를 true로
        setTimeout(() => setAnimate(false), 250); // 0.25초 뒤에 애니메이트를 false로 전환
      }
      setLocalVisible(visible); //visible값이 바뀔 때 마다 localVisible값을 동기화시킨다.
    }, [localVisible, visible]);
  

    if(!localVisible && !animate) return null; //localVisible false일 때 +animate가 false일 떄 null
   return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
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