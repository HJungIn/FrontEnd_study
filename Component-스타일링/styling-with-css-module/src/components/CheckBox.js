import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'; //컴포넌트 처럼 사용 가능
import styles from './CheckBox.module.css';
import classNames from 'classnames/bind'; //bind 는 css module사용 시 좀더 쉽게 해줌

const cx = classNames.bind(styles);

console.log(styles);

function CheckBox({ checked, children, ...rest }) {
  return (
    <div className={cx(styles.checkbox, 'aaaa')}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        {/* <div>{checked ? '체크됨' : '체크 안됨'}</div> */}
        <div className={cx(styles.icon)}>{checked ? <MdCheckBox className={cx(styles.checked)}/> : <MdCheckBoxOutlineBlank />}</div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default CheckBox;