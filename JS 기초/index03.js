// ==== 산술 연산자 (+,-,*,/) ====
let a = 1 + 2 - (3 * 4) / 4;
console.log(a);

let aa = 1;
console.log(a++); // 결과 : 1
console.log(a); // 결과 : 2
console.log(++a); // 결과 : 3

// ==== 대입 연산자 (=) ====
let value = 1;
value += 3;
console.log(a); // 결과 : 4

// ==== 논리연산자 : NOT (!) , AND (&&) , OR (||) => 순서는 not, and, or 순서로 진행됨
const b1 = !false;
console.log(b1); // 결과 : true

const b2 = true && true;
console.log(b2); // 결과 : true

const b3 = true || false;
console.log(b3); // 결과 : true

const b4 = !(true && false || true && false || !false); //순서대로하기
// !(true && false || true && false || true)
// !( false || false || true)
// !( true )
// false


// ==== 비교연산자 ==== 
// '==' : 타입까지는 비교하지 않음 ex) true == 1은 같다고 나옴, '1'==1도 같다고 나옴, null==undefined도 같다고 나옴 => 부정형 : !=
// '===' : 타입까지 비교하고 같아야 함 ==> 이걸로 쓸것! => 부정형 : !==
const c1 = 1;
const c2 = 1;
const equals = c1 === c2;
console.log(equals);

const c3 = 1;
const c4 = '1';
const notEquals = c3 !== c4;
console.log(notEquals);

// > , <
const c5 = 10;
const c6 = 15;
const c7 = 15;
console.log(c5 < c6);
console.log(c6 > c5);
console.log(c5 <= c7);
console.log(c5 >= c6);

// ==== 문자열 붙이기 ====
const d1 = "안녕";
const d2 = "하세요";
console.log(d1 + d2);