class LocalDB<T> {
    constructor(private localStorageKey: string){

    }
    add(v: T){
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));
    }
    get(): T{
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}

interface User {name: string}

const userDb = new LocalDB<User>('user'); // User을 위한 LocalDB
userDb.add({name: 'jay'});
const userA = userDb.get();
userA.name;

//인터페이스에 사용한 제네릭
interface DB<T> {
    add(v:T): void;
    get(): T;
}
class D<T> implements DB<T> { //imple 중 <T> 유지
    add(v: T): void {
        throw new Error("Method not implemented.");
    }
    get(): T {
        throw new Error("Method not implemented.");
    }
}

class LocalDB2<T> implements DB<T> { //imple 중 <T> 유지
    constructor(private localStorageKey: string){

    }
    add(v: T){
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));
    }
    get(): T{
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}

interface User {name: string}

const userDb2 = new LocalDB2<User>('user'); // User을 위한 LocalDB
userDb2.add({name: 'jay'});
const userA2 = userDb2.get();
userA2.name;


//제네릭 타입 파라미터의 범위를 특정한 타입으로 고정하기
interface JSONSerialier {
    serialize(): string;
}

class LocalDB3<T extends JSONSerialier> implements DB<T> {
    constructor(private localStorageKey: string){

    }
    add(v: T){
        v.serialize(); //여기서 이렇게 사용 가능
        localStorage.setItem(this.localStorageKey, v.serialize());
    }
    get(): T{
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}

//조건부 제네릭
interface Vegetable {
    v: string;
}
interface Meat {
    m: string;
}
interface Cart2<T> {
    getItem(): T extends Vegetable ? Vegetable : Meat;
}
// const cart4: Cart2<Vegetable> = {
const cart4: Cart2<string> = {
    getItem() {
        return {
            m: ''
        }
    }
}
cart4.getItem();