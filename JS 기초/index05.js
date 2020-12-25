//함수 : ES6(ES2015)
function add(a, b) {
    return a + b;
}

const sum = add(1, 2);
console.log(sum);

function hello(name) {
    console.log('Hello, ' + name + "!");
}
hello("velo");

// === 화살표 함수 ===
const add2 = (a,b) => {  //이 함수는 const add2 = (a,b) => a+b 와 같다.
    return a+b;
}
const sum2 = add2(1,2);
console.log(sum2);

const hello3 = (name) => {
    return `Hello~ ${name}`; 
}
console.log(hello3("vello~"));

// === 템플릿 리터럴 ===
function hello2(name) {
    return `Hello ${name}!`; //백키 : 숫자키 옆 `
}
const result = hello2("velo");
console.log(result);

//연습
function getGrade(score) {
    if (score === 100) {
        return 'A+';
    } else if (score >= 90) {
        return 'A';
    } else if (score === 89) {
        return 'B+';
    } else if (score >= 80) {
        return 'B';
    } else if (score === 79) {
        return 'C+';
    } else if (score >= 70) {
        return 'C';
    } else if (score === 69) {
        return 'D+';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
const grade = getGrade(100);
console.log(grade);
