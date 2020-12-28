//삼항 연산자  => condition ? true : false
const arr = [1,2,3];
let text = arr.length === 0 ? "배열이 비었습니다." : "안비었습니다. "
console.log(text);

const condition1 = false;
const condition2 = false;
const value = condition1
    ? '와우!'
    : condition2
        ? 'blala'
        : 'foo';
console.log(value); // 결과 : foo

