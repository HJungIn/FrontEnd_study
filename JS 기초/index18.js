//scope : 변수나 함수를 선언하게 될 때 해당 변수나 함수가 어디까지 유효한지에 대한 범위
// === 1. Global(전역): 코드 전체 2.function: 특정함수 내에서만 3. block : if, for, switch 같은 중괄호에서만

const value = 'hello!'; // var 키워드 사용하면 안됨!!!!

function myFunction(){
    console.log('myFunction : ');
    console.log(value); // hello!
}
function otherFunction(){
    console.log('otherFunction : ');
    const value = 'bye!';
    console.log(value); // bye!
}
console.log(value); // hello!


function myFunction2(){
    const value = 'bye';
    const anotherValur = 'world';
    function functionInside(){
        console.log('functionInside : ');
        console.log(value); //bye
        console.log(anotherValur); //world
    }
    functionInside();
}
console.log(value); // hello!


function myFunction3(){
    const value = 'bye';
    if(true){
        const value = 'world';
        console.log('block scope : ');
        console.log(value); //world
    }
    console.log('Function scope : ');
    console.log(value); // bye
}
console.log(value); // hello!


// === hoisting : 아직 선언되지 않은 함수 또는 변수를 끌어올려서 사용할수 있는 자바 스크립트의 작동방식
myFunction4(); // 함수가 아래에 있어도 끌어올려서 사용가능 => 하지만 권하지는 않는다. why? 코드가 헷갈려지고 유지보수가 어렵다

function myFunction4(){
    console.log('lalal');
}
//예방방법 => 바로 넣기
const myFunction5 = function myFunction5(){
    console.log('sssss');
}

//var number;로 변수명만 위로 hoisting된다. => const나 let은 hoisting (x)
console.log(number);
var number = 2;
