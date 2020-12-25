//객체 => 키:값 형태
const dog = {
    name: '멍멍이',
    age: 2,
    'key with space':'yes'
}
console.log(dog);
console.log(dog.name);
console.log(dog.age);


const ironMan = {
    name:'토니 스타크',
    actor:'로다주',
    alias:'아이언맨'
};
const captiainAmerica = {
    name: '스티브 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};
console.log(ironMan);
console.log(captiainAmerica);
function print(hero){
    const text = `${hero.alias}(${hero.name})역할을 맡은 배우는 ${hero.actor}입니다.`;
    console.log(text);
}
print(ironMan);
print(captiainAmerica);

// == 비구조화 할당 : 객체 구조 분해 => 특정 값들을 객체에서 빼온다 ==
function print2(hero){
    const { alias, name, actor } = hero; //hero 객체 안에있는 값들을 빼온 것
    const text = `${alias}(${name})역할을 맡은 배우는 ${actor}입니다.`;
    console.log(text);
}
function print3( { alias, name, actor }){ //매개변수에 바로 할당하기
    const text = `${alias}(${name})역할을 맡은 배우는 ${actor}입니다.`;
    console.log(text);
}
const {name} = ironMan;
console.log(name);

// === 객체 안에 함수 넣기 ===
const dog2 ={
    name:'멍멍이',
    sound:'멍멍!',
    say: function say(){ // say(){ 라고만 적어줘도 ㅇㅋ
        console.log(this.sound); //화살표함수는 this를 연결시키지 못함 => 작동 x 
    }
};
dog2.say();

const cat2 = {
    name:'야옹이',
    sound:'야옹~'
};
cat2.say = dog2.say;
cat2.say(); // 결과 : 야옹~ => this를 cat으로 잘 가르킨다.

const catSay = cat2.say;
catSay(); //이건 this와의 관계가 사라지기 때문에 에러가 난다.

// === Getter : 특정 값 조회 , Setter ===
const numbers = {
    a:1,
    b:2,
    get sum(){
        console.log('sum 함수가 실행됩니다.');
        return this.a+this.b;
    }
};
console.log(numbers.sum);

const dog3 = {
    _name: '멍멍이', //setter설정을 위해 변수명이 겹치치않게 하려고 _를 붙임
    get name(){
        console.log('_name을 조회합니다..');
        return this._name;
    },
    set name(value){
        console.log('이름이 바뀝니다..'+value);
        this._name = value;
    }
};
console.log(dog3.name); //getter
dog3.name = '뭉뭉이'; //setter
console.log(dog3.name); //getter

const numbers2 = {
    _a:1,
    _b:2,
    sum:3,
    calculate(){
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a(){
        return this._a;
    },
    get b(){
        return this._b;
    },
    set a(value){
        this._a = value;
        this.calculate();
    },
    set b(value){
        this._b = value;
        this.calculate();
    }
}
console.log(numbers2.sum); // 3
numbers2.a = 5;
numbers2.b = 7;
numbers2.a = 9;
console.log(numbers2.sum); // 16
