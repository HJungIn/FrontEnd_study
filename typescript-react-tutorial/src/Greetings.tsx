import React from 'react';

/* React.FC으로 기본값, 디폴트값 정할 때 */
// 디폴트값을 주기위해서는 ?붙이기 + 바로 비구조화 할당으로 주기
type GreetingsProps = {
    name: string;
    mark?: string; // 디폴트값을 주기위해서는 ?붙이기
};

const Greetings:React.FC<GreetingsProps> = ({name, mark = '!'}) => { //React.FC 라는 것을 사용하여 컴포넌트의 타입을 지정
    return <div>Hello, {name} {mark}</div>
}

// export default Greetings;

/* function으로 기본값, 디폴트값 정할 때 */
type GreetingsProps_func = {
    name: string;
    mark: string;
    optional?: string;
    // onClick: () => void; //함수일 경우 이런형식, 이 함수는 아무것도 prop로 가져오지 않고 암것도 리턴하지 않는다는 함수
    onClick: (name: string) => void;
    children?: React.ReactNode; // React.FC는 이게 자동 적용 되는데 function으로 쓸 때는 직접 설정해 줘야함
};
  
function Greetings_func({ name, mark, optional, onClick }: GreetingsProps_func){
    const handleClick = () => onClick(name);
    return (
    <div>
        Hello, {name} {mark}
        {optional && <p>{optional}</p>}
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    </div>
    );
}
  
Greetings_func.defaultProps = {
    mark: '!'
};
  
export default Greetings_func;