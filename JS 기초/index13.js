//단축 평가 논리 계산법
// && : 앞에 오는것이 true나 truthy하면 결과는 오른쪽에 오는값이 된다, 그리고 앞에 오는 것이 false나 falsy한 값이 오면 결과는 앞에 있는 값이 된다.
// 특정값이 유효할때 어떤값을 조회해야할 때 사용
console.log(true && 'hello'); //hello
console.log(false && 'hello'); //false
console.log('hello' && 'bye'); //bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); //""
console.log(0 && 'hello'); //0
console.log(1 && 'hello'); //hello
console.log(1 && 1); //1

const object = null;
const object1 = {name:'a'};
const name = object && object.name;
const name1 = object && object1.name;
console.log(name); //null
console.log(name1); //a

// || : 앞에 오는 값이 false나 falsy한 값이 오면 결과는 뒤에 있는 값이 된다, 그리고 앞에 오는것이 true나 truthy하면 결과는 앞에 오는값이 된다
console.log(false || 'hello'); //hello
console.log('' || 'hello'); //hello
console.log(null || 'hello'); //hello
console.log(undefined || 'hello'); //hello
console.log(0 || 'hello'); //hello

console.log(1 || 'hello'); //1
console.log(true || 'hello'); //true
console.log('1' || 'hello'); //1
console.log([] || 'hello'); //[]