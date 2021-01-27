//index-type : 속성이 정해져 있지 않고 동적일 시 처리하기 편함
interface Props {
    name: string;
    [key: string]: string;
}

const p: Props = {
    name: 'hello',
    a:'d',
    b:'e',
    0: 'e',
    1: 'f'

}
p["a"]
p[3]
p.name

let keys: keyof Props;  
interface User3 {
    name: string;
    age: number;
    hello(msg: string): void;
}

let keysOfUser: keyof User3;//keys : "name"|"age"|"hello" => keyof의 효과
keysOfUser = "age";
let helloMethod: User3["hello"];
helloMethod = function(msg: string){

}