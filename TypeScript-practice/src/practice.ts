/* 기본 사용법 */
// const message: string = 'hello world';
// console.log(message);

/* 기본 타입 */
let count = 0;
count += 1;
// count = '문자열'; //숫자가 들어가야해서 에러

const message: string = 'hello world';
const done: boolean = false;

const numbers: number[] = [1,2,3];
const messges: string[]  = ['hello', 'world'];
// messges.push(1); //문자열에 숫자 들어가면 안되서 에러

let mightBeUndefined: string | undefined = 'aa'; //이 값은 string이거나 undefined가 될 수 있다.
let nullableNumber: number | null = null; // null이거나 숫자일 때 

let color: 'red' | 'orange' | 'yellow' = 'red'; //color에는 레드 오렌지 옐로우 중 하나 들어갈 수 있다.
color = "yellow";
// color = 'green'; // color에는 위 3가지 색상밖에 못들어가서 에러

/* 함수에서 타입 정의하기 */
function sum(x: number, y: number): number { // 매개변수도 number, return 값도 number
    return x+y;
}
const result = sum(1,2);

function sumArray(numbers:number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1,2,3,4,5]);
console.log(total);

function returnNothing() { //아무것도 안썼다면 void
    console.log('어쩌고 저쩌고');
}
returnNothing();

function returnNothing1(): string | number { //string 이거나 number
    console.log('어쩌고 저쩌고');
    return 1;
}

/* interface 사용해보기 */
interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    // radius: number;
    // constructor(radius: number){ //생성자 만들기
    //     this.radius = radius;
    // }

    constructor(private radius: number){ //자동생성 생성자 : private는 접근 불가, public은 접근 가능
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    // width: number;
    // height: number;
    // constructor(width: number, height: number){
    //     this.width = width;
    //     this.height = height;
    // }

    constructor(private width: number, private height: number){
    }

    getArea(){
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(2,5);

const shapes: Shape[] = [circle, rectangle];
shapes.forEach(shape => {
    console.log(shape.getArea()); 
});

/* 인터페이스를 사용해서 객체의 타입도 지정해 줄 수 있다. */
interface Person {
    name: string;
    age?: number; // ? : age가 있을 수도 있고 없을 수도 있다.
}

// interface Developer {
//     name: string;
//     age?: number;
//     skills: string[];
// }
interface Developer extends Person{ // 겹치는 부분은 extends
    skills: string[];
}

const person: Person = {
    name: '김사람',
    age: 20
};

const expert: Developer = {
    name: '김개발',
    skills: ['js', 'react', 'ts']
};

/* Type Alias 사용하기 */
type Person1 = {
    name: string;
    age?: number;
}

type Developer1 = Person & { //상속 : & 로 표시 
    skills: string[];
}

const person1: Person = {
    name: '김사람',
    age: 20
};

const expert1: Developer = {
    name: '김개발',
    skills: ['js', 'react', 'ts']
};

type People = Person1[];
const people: People = [person1, expert1];
type Color = 'red' | 'orange' | 'yellow';
const color1:Color = 'orange';