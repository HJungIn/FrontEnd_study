//intersection : 여러 타입을 하나로 합쳐놓은 타입
interface User {
    name: string;
}

interface Action {
    do(): void;
}

function createUserAction(u: User, a: Action): User & Action { // & 로 합치기
    return {...u, ...a};
}

const u = createUserAction({name: 'jay'}, {do(){}});


//union-type => type에 대한 조건 사용하기 1.typeof 2. <Action>v)타입어썰션 3. 타입에 대한 사용자 정의
//exam1
function compare(x: number, y: number) //함수 오버로딩
function compare(x: string, y: string) //함수 오버로딩
function compare(x: string | number, y: string | number) {
    if(typeof x==='number' && typeof y === 'number'){ // 타입 비교
        return x === y ? 0 : x>y ? 1 : -1;
    }
    if(typeof x === 'string' && typeof y === 'string'){
        return x.localeCompare(y);
    }
    throw Error('not supported type');
}
const v = compare(2, 1);
console.log([3,2,1].sort(compare));
console.log(['c','b','a'].sort(compare));

//exam2
//타입에 대한 사용자 정의
function isAction(v: User | Action): v is Action { //v가 Action일 때
    return (<Action>v).do !== undefined;
}

function process(v: User | Action) {
    // if((<Action>v).do){ //타입 어썰션 - v가 Action이라 생각하고 do에 접근 
    if(isAction(v)){
        v.do()
    } else {
        console.log(v.name);
        
    }
}