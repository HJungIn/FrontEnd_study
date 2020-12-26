// 배열 내장 함수 
/**
 *   forEach
 */
// === forEach === 
const superheros = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

function print(hero) {
    console.log(hero);
}
superheros.forEach(print); //1번 방법

superheros.forEach(function (hero) { //2번 방법
    console.log(hero);
})

superheros.forEach((hero) => { //3번 방법
    console.log(hero);
})

/**
 *   map, indexof, findIndex, find
 */
// === map : 객체요소들 전체에 대해 변환을 해주고 싶을 때 사용 ===
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const squared = []; //제곱 된 값 넣기
for (let i = 0; i < array.length; i++) { //1번 방법
    squared.push(array[i] * array[i]);
}
console.log(squared)

array.forEach(n => { //2번 방법
    squared.push(n * n);
});
console.log(squared)

const square = n => n * n; //3번 방법
const squared2 = array.map(square);

const squeared3 = array.map(n => n * n); //4번 방법

// === indexOf, findIndex, find === 
const items = [{
    id: 1,
    text: 'hello'
}, {
    id: 2,
    text: 'bye'
}];
const texts = items.map(item => item.text);
console.log(texts); //결과 : ["hello", "bye"]


const index = superheros.indexOf('토르'); //몇 번째원소인지 찾는 법
console.log(index); //결과 : 2

const todos = [{
        id: 1,
        text: '자바 스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
];
const index1 = todos.indexOf(3);
console.log(index1); // 결과 : -1 => 못찾음

const index2 = todos.findIndex(todo => todo.id === 3); //배열안에 요소가 객체이거나 특수한 조건에 따라 알고싶을 때 사용
console.log(index2); //결과 : 2 => 잘 찾음 

const todo = todos.find(todo => todo.id === 3); //객체 찾기 => 여러개일 때는 가장 첫번째로 보이는 객체를 return 해줌
console.log(todo);

/**
 *   filter
 */
// === filter : 특정 조건을 만족하는 원소들을 찾아서 그 원소들로 새로운 배열 만들기===
const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone); // 결과 : [ { id: 4, text: '배열 내장함수 배우기', done: false } ]

/**
 *   splice, slice
 */
// === splice : 배열에서 특정 항목을 제거한다.(몇번째 idx부터 , 몇개를 지울건지) ===
const numbers2 = [10, 20, 30, 40];
const index3 = numbers2.indexOf(30);
const spliced = numbers2.splice(index3, 1); // index3부터 1개를 지운다.
console.log(spliced); // 결과 : [ 30 ]
console.log(numbers2); // 결과 : [ 10, 20, 40 ]

// === slice : 기존의 배열을 건드리지 않고 자른 값만 저장함 ===
const numbers3 = [10, 20, 30, 40];
const sliced = numbers3.slice(0, 2);
console.log(sliced); // 결과 :  [ 10, 20 ]
console.log(numbers3); // 결과 :  [ 10, 20, 30, 40 ]

/**
 *   shift, pop, unshift, push => 원본 배열 변화 o
 */
// === shift : 맨 앞에있는 원소를 하나씩 빼내는 것 ===
const numbers4 = [10, 20, 30, 40];
const value = numbers4.shift();
console.log(value);
console.log(numbers4);

// === pop : 맨 뒤에 있는 원소를 하나씩 빼내는것 ===
const numbers5 = [10, 20, 30, 40];
const value1 = numbers5.pop();
console.log(value1);
console.log(numbers5);

// === unshift : 맨 앞부분에 값을 넣어주는 것 ===
const numbers6 = [10, 20, 30, 40];
numbers6.unshift(50);
console.log(numbers6);

// === push : 맨 뒷부분에 값을 넣어주는 것 ===
const numbers7 = [10, 20, 30, 40];
numbers7.push(50);
console.log(numbers7);

/**
 *   concat, join
 */
// === concat : 배열 합치기 : 기존 배열에 영향 x
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated1 = arr1.concat(arr2); //1번 방법
const concated2 = [...arr1, ...arr2]; //2번 방법
console.log(concated1);

// === join : 배열 안에 있는 값들을 문자열 형태로 합쳐줄 때 사용
const arr3 = [1, 2, 3, 4, 5];
console.log(arr3.join()); // 결과 : 1,2,3,4,5
console.log(arr3.join(' ')); // 결과 : 1 2 3 4 5
console.log(arr3.join(', ')); // 결과 : 1, 2, 3, 4, 5

/**
 *   reduce
 */
// === reduce : 배열안에 있는 모든 값들을 사용해서 어떤 값을 연산할 때 사용 ===
const numbers8 = [1, 2, 3, 4, 5];
let sum = 0; //총 합 구하기 => 1번 방법
numbers8.forEach(n => {
    sum += n;
});
console.log(sum);

// 총 합 구하기 => 2번 방법 ||  0은 초기값, accumulator= 누적된 값
const sum2 = numbers8.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum2);

//평균 구하기 || index: 몇번때 아이템인지, array:실행되고 있는 자기 자신의 배열
const sum3 = numbers8.reduce((accumulator, current, index, array) => {
    if (index === array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0); //0이 accumulater의 기본값
console.log(sum3);

// 각 알파벳이 몇번 씩 나왔는지 || acc = {}로 시작해 값을 저장, current: a, b,...
const alpahbets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];
const counts = alpahbets.reduce((acc, current) => {
    if (acc[current]) { //acc안에 current가 존재하는가? 
        acc[current] += 1; // 키가 current인 값에 1을 더한다.
    } else {
        acc[current] = 1; // 키:값을 {a:1}이라고 만들어주는 것
    }
    return acc;

}, {}); //비어있는 객체가 기본값
console.log(counts);


/**
 *   퀴즈 : 숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.
 */
//1번
function countBiggerThanTen(numbers) {
    let count = 0;
    numbers.forEach(n => {
        if (n > 10) {
            count++;
        }
    });
    return count;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

//2번
function countBiggerThanTen(numbers) {
    return numbers.filter(n => n > 10).length;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

//3번
function countBiggerThanTen(numbers) {
    return numbers.reduce((acc, current) => {
        if (current > 10) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5