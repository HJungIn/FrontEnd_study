//let : 변수를 지칭함 : 값을 바꿀 수 있다. 
let value = 1; 
console.log(value);
value = 2;
console.log(value);

//const : 상수를 지칭함 : 값이 고정적이다. =>바꾸려 하면 에러남(읽기전용이라서)
const a = 1;

//var : 변수를 사용할 때 : but 요즘은 안쓰는 게 좋음
var a = 1;

//==== 문자열일 때 ====
let text = 'hello';
let name = "헬로우 자바스크립트";

//==== 참, 거짓 ====
let good = true;
let loading = false;

// == null vs undefined ====
let n = null; // 진짜 없다! => ex) 범인이 없을때
let u = undefined; //아직 정해지지 않았다! => ex) 범인이 있겠지만 아직 나타나지 않을때
