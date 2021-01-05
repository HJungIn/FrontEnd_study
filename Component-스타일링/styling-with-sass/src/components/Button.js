import React from 'react';
import './Button.scss';
import classnames from 'classnames';

//size : large, medium, small
function Button({ children, size, color, outline, fullWidth }) {
  // return <button className={['Button', size].join(' ')}>{children}</button>; //Button size 형식으로 나옴 => 내가 다 써줘야함
  // return <button className={`Button ${size}`}>{children}</button>; //템플릿 형식 => 내가 다 써줘야함
  return <button className={classnames('Button', size, color, {
    outline, //true일 때만 className에 추가 된다.
    fullWidth //true일 때만 className에 추가 된다.
  })}>{children}</button>; //classnames 라이브러리를 이용해 자동으로 정렬되도록 해준다
}

Button.defaultProps = { //기본값
  size: 'medium',
  color: 'blue'
};

export default Button;