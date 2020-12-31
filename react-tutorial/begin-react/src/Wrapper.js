import react from 'react';

function Wrapper({children}){ //children으로 다른 컴포넌트를 가져오는 것
    const style = {
        border: '2px solid black',
        padding: 16
    };

    return <div style={style}>{children}</div>
}

export default Wrapper;