import React, {useState} from 'react';
import styled, { css, ThemeProvider } from 'styled-components'; //태그 템플릿을 사용하기 위해 css를 불러온다
import Button from './components/Button';
import Dialog from './components/Dialog';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;
  ${props => //여러줄의 props를 적용하기
    props.huge &&
    css` //여러 줄의 CSS 코드를 조건부로 보여주고 싶다면 css 를 사용 => css 를 불러와서 사용을 해야 그 스타일 내부에서도 다른 props 를 조회 할 수 있다.
      width: 10rem;
      height: 10rem;
    `}
`;

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const palette = {
  blue: '#228be6',
  gray: '#495057',
  pink: '#f06595'
}

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log('확인');
    setDialog(false);
  };
  const onCancel = () => {
    console.log('취소');
    setDialog(false);
  };

  return (
    <div>
      <>
        <Circle color="black" />
        <Circle color="red" huge />
      </>

      <>
      {/* 버튼 만들기 */}
      <ThemeProvider theme={{palette}}>
      <AppBlock>
        <ButtonGroup>
          <Button>BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button color="pink">BUTTON</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button size="large">BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button color="pink" size="small">BUTTON</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button size="large" outline>BUTTON</Button>
          <Button color="gray" outline>BUTTON</Button>
          <Button color="pink" size="small" outline>BUTTON</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button size="large" fullWidth>BUTTON</Button>
          <Button color="gray" size="large" fullWidth>BUTTON</Button>
          <Button color="pink" size="large" fullWidth>BUTTON</Button>
        </ButtonGroup>
      </AppBlock>

      <>
      <AppBlock>
        <Button color="pink" size="large" onClick={onClick} >삭제</Button>
      </AppBlock>
      
      <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          visible={dialog}
          onConfirm={onConfirm} 
          onCancel={onCancel} 
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </>
      </ThemeProvider>
      </>
    </div>
  );
    
}

export default App;