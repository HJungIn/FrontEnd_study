import React from 'react';
import './Button.scss';
import classnames from 'classnames';

//size : large, medium, small
function Button({ children, size }) {
  // return <button className={['Button', size].join(' ')}>{children}</button>; //Button size 형식으로 나옴 => 내가 다 써줘야함
  // return <button className={`Button ${size}`}>{children}</button>; //템플릿 형식 => 내가 다 써줘야함
  return <button className={classnames('Button', size)}>{children}</button>; //classnames 라이브러리를 이용해 자동으로 정렬되도록 해준다
}

Button.defaultProps = { //기본값
  size: 'medium'
};

export default Button;