//프로토타입과 클래스
//객체 생성자
function Animal(type, name, sound){ //첫글자는 대문자로!
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function(){
        console.log(this.sound);
    };
}
const dog = new Animal('개', '멍멍이','멍멍'); //new 키워드 사용!
const cat = new Animal('고양이', '야옹이','야옹');
dog.say();
cat.say();

// === 프로토 타입 : 객체 생성자로 무언가를 만들었을때 그걸로 만든 객체들끼리 공유할 수 있는 값이나 함수를 프로토타입으로 설정 가능 ===
// 프로토타입으로 밖에 say함수 만들기
function Animal2(type, name, sound){ 
    this.type = type;
    this.name = name;
    this.sound = sound;
}
Animal2.prototype.say = function(){
    console.log(this.sound);
}
Animal2.prototype.sharedValue = 1; //dog와 cat은 sharedValue의 값을 갖게 된다.
const dog2 = new Animal2('개', '멍멍이','멍멍');
const cat2 = new Animal2('고양이', '야옹이','야옹');

// === 상속 ===
function Animal3(type, name, sound){ 
    this.type = type;
    this.name = name;
    this.sound = sound;
}
Animal3.prototype.say = function(){
    console.log(this.sound);
}
function Dog(name, sound){
    Animal3.call(this, '개', name, sound);
}
function Cat(name, sound){
    Animal3.call(this, '고양이', name, sound);
}
Dog.prototype = Animal3.prototype; //상속관계 설정
Cat.prototype = Animal3.prototype; //상속관계 설정

const dog3 = new Dog('멍멍이','멍멍');
const cat3 = new Cat('야옹이', '야옹');
dog3.say();
cat3.say();

// === 클래스 : 객체 생성자와 프로토타입을 좀 더 쉽게 사용하기 위해 ===
class Animal4 {
    constructor(type, name, sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say(){
        console.log(this.sound);
    };
}

const dog4 = new Animal4('개', '멍멍이','멍멍');
const cat4 = new Animal4('고양이', '야옹이','야옹');
dog4.say();
cat4.say();

class Dog4 extends Animal4{ //Animal 생성자 먼저 실행됨
    constructor(name, sound){
        super('개', name, sound);
    }
}

class Cat4 extends Animal4{ 
    constructor(name, sound){
        super('고양이', name, sound);
    }
}

const dog5 = new Dog4('멍멍이','멍멍');
const cat5 = new Cat4('야옹이','야옹');
const cat5_1 = new Cat4('야오오오옹이','야오오오옹');
dog5.say();
cat5.say();
cat5_1.say();

//연습
class Food{
    constructor(name){
        this.name = name;
        this.brands = [];
    }
    addBrand(brand){
        this.brands.push(brand);
    }
    print(){
        console.log(`${this.name}을(를) 파는 음식점들: `);
        console.log(this.brands.join(', ')); //, 로 brands안에 있는 요소들 string으로 만들어줌
    }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');

const chicken = new Food('치킨');
chicken.addBrand('굽네치킨');
chicken.addBrand('BBQ');

pizza.print();
chicken.print();