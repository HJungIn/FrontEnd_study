import React from 'react';

function HelloWithProps(props){ //props는 객체 형태로 들어가 있음
    console.log(props);
    return <div style={{ //안쪽 중괄호는 객체, 바깥 중활호는 객체를 감싸는 역할
        color: props.color
    }}>props인 {props.name}와 함께 안녕하세요</div>;
}

/*
function HelloWithProps2({color, name}){  //구조분해
    console.log(props);
    return <div style={{ 
        color
    }}>props인 {props.name}와 함께 안녕하세요</div>;
}
*/

HelloWithProps.defaultProps = {
    name: '이름없음'
};

export default HelloWithProps; //Hello라는 컴포넌트를 내보내기