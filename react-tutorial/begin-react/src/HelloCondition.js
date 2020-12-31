import React from 'react';

function HelloWithCondition({color, name, isSpecial}){ //구조분해
    return( 
    <div style={{ 
        color
    }}>
        {isSpecial && <b>*</b> } 
        {/* {isSpecial ? <b>*</b> : null}  */}
        {/* {isSpecial ? '스페셜하다' : '스페셜하지않다.'}  */}
        조건부 렌더링, 안녕하세요 {name}</div>
    );
}

HelloWithCondition.defaultProps = {
    name: '이름없음'
};

export default HelloWithCondition;