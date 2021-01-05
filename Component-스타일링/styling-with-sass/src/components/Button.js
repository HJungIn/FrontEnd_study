import React from 'react';
import './Button.scss';
import classnames from 'classnames';

//size : large, medium, small
function Button({ children, size, color, outline, fullWidth, className, ...rest }) { // 앞의 파라미터를 뺀 나머지 파라미터(함수포함)들의 모임
  // return <button className={['Button', size].join(' ')}>{children}</button>; //Button size 형식으로 나옴 => 내가 다 써줘야함
  // return <button className={`Button ${size}`}>{children}</button>; //템플릿 형식 => 내가 다 써줘야함
  return <button className={classnames('Button', size, color, {
    outline, //true일 때만 className에 추가 된다.
    fullWidth //true일 때만 className에 추가 된다.
  }, className //선택형으로 커스텀하는것을 원할 때 추가
  )}
  
  {...rest} //rest객체 안에 있는 모든 것들을 이 버튼에게 설정해준다. (onClick, mousemove..등등)

  >{children}</button>; //classnames 라이브러리를 이용해 자동으로 정렬되도록 해준다
}

Button.defaultProps = { //기본값
  size: 'medium',
  color: 'blue'
};

export default Button;