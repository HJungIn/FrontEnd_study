function createUserAction(u, a) {
    return Object.assign(Object.assign({}, u), a);
}
const u = createUserAction({ name: 'jay' }, { do() { } });
function compare(x, y) {
    if (typeof x === 'number' && typeof y === 'number') { // 타입 비교
        return x === y ? 0 : x > y ? 1 : -1;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    }
    throw Error('not supported type');
}
const v = compare(2, 1);
console.log([3, 2, 1].sort(compare));
console.log(['c', 'b', 'a'].sort(compare));
//exam2
//타입에 대한 사용자 정의
function isAction(v) {
    return v.do !== undefined;
}
function process(v) {
    // if((<Action>v).do){ //타입 어썰션 - v가 Action이라 생각하고 do에 접근 
    if (isAction(v)) {
        v.do();
    }
    else {
        console.log(v.name);
    }
}
