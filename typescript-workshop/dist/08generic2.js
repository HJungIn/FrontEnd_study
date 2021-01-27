class LocalDB {
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
    }
    add(v) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));
    }
    get() {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}
const userDb = new LocalDB('user'); // User을 위한 LocalDB
userDb.add({ name: 'jay' });
const userA = userDb.get();
userA.name;
class D {
    add(v) {
        throw new Error("Method not implemented.");
    }
    get() {
        throw new Error("Method not implemented.");
    }
}
class LocalDB2 {
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
    }
    add(v) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));
    }
    get() {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}
const userDb2 = new LocalDB2('user'); // User을 위한 LocalDB
userDb2.add({ name: 'jay' });
const userA2 = userDb2.get();
userA2.name;
class LocalDB3 {
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
    }
    add(v) {
        v.serialize(); //여기서 이렇게 사용 가능
        localStorage.setItem(this.localStorageKey, v.serialize());
    }
    get() {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}
// const cart4: Cart2<Vegetable> = {
const cart4 = {
    getItem() {
        return {
            m: ''
        };
    }
};
cart4.getItem();
