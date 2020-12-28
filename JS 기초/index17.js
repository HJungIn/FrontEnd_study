// spread와 rest : ... 을 사용
// === spread : 펼치다,퍼뜨리다 : 객체나 배열의 값을 펼칠 수 있다. => 값을 퍼뜨린다
const slim1 = {
    name: '슬라임'
};
const cuteSlime1 = {
    name: '슬라임',
    attribute: 'cute'
};
const purpleCuteSlime1 = {
    name: '슬라임',
    attribute: 'cute',
    color:'purple'
};

const slim2 = {
    name: '슬라임'
};
const cuteSlime2 = {
    ...slim2, //기존값을 복사해서 넣어준다.
    attribute: 'cute'
};
const purpleCuteSlime2 = {
    ...cuteSlime2,
    color:'purple'
};
const greenCuteSlime2 = {
    ...purpleCuteSlime2,
    color:'green' // 아래있을 때만 green으로 적용됨. 어떤 연산을 먼저 하느냐의 차이
};

const animals = ['개','고양이','참새'];
const anotherAnimals = [...animals, '비둘기']; //기존 animals에 비둘기가 추가됨

const numbers = [1,2,3,4,5];
const spreadNumbers = [...numbers, 1000, ...numbers]; // [1,2,3,4,5,1000,1,2,3,4,5]

// === rest : 나머지 : 객체, 배열, 함수의 파라미터에서 사용 가능 => 값을 모아온다. ===
// 객체에서의 rest
const purpleCuteSlime3 = {
    name: '슬라임',
    attribute: 'cute',
    color:'purple'
};
const {color, ...rest} = purpleCuteSlime3;
console.log(color); // purple
console.log(rest); // {name: 슬라임, attribute: cute}

const {attribute, ...slime3} = rest;
console.log(slime3); // {name:'슬라임'}

// 배열에서의 rest
const numbers1 = [0,1,2,3,4,5,6];
const [one, ...rest] = numbers1;
console.log(one); //0
console.log(rest); // [1,2,3,4,5,6]
//배열에서의 rest는 마지막에 와야한다. => const [...rest, one] = numbers1 은 xxx!! 안됨

// 함수 파라미터에서의 rest : 몇개가 들어오는 지 모를때 사용하면 good
function sum (...rest){ // 몇개 가 들어가던지 상관없고 배열로 들어간다
    return rest.reduce((acc, current) => acc+current, 0);
}
console.log(sum(1,2,3,4,5,6,7)); 

//함수의 인자에서의 rest : 파라미터는 함수에서 쓰는 값이고, 인자는 함수를 사용할때 넣는 값
function subtract(x,y){
    return x-y;
}
const numbers2 = [1,2];
console.log(subtract(...numbers2));

//퀴즈 : 최댓값 구하기
function max(...numbers) {
    return numbers.reduce(
      // acc 이 current 보다 크면 결과값을 current 로 하고
      // 그렇지 않으면 acc 가 결과값
      (acc, current) => (current > acc ? current : acc),
      numbers[0]
    );
  }
  
  const result = max(1, 2, 3, 4, 10, 5, 6, 7);
  console.log(result);