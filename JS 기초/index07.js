//배열 : [0,1,2,3] => 대괄호 사용
const array = [1, 2, 3, 4, 5];
console.log(array);

const array2 = [1, 'blabla', {}, 4]; //2번째꺼는 객체
console.log(array2[0]); //0번째의 요소 가져오기

const objects = [
    {name:'멍멍이'}, 
    {name:'야옹이'}
];
console.log(objects); //[ { name: '멍멍이' }, { name: '야옹이' } ]
console.log(objects[0]);
console.log(objects[1]);

// == 새로운 배열 항목 추가 ==
objects.push({
    name: '멍뭉이'
});
console.log(objects); //[ { name: '멍멍이' }, { name: '야옹이' }, { name: '멍뭉이' } ]

// == 배열 크기 ==
console.log(objects.length); // 3
