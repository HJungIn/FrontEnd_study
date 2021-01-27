// 파라미터에 제네릭 타입이 있을 떄 => 함수명<T> 
function createPromise(x, timeout) {
    return new Promise((resolve, reject) => {
        // return new Promise((resolve: (v:T) => void, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeout);
    });
}
// createPromise<string>("str",100)
// createPromise("1",100)
createPromise(1, 100)
    .then(v => console.log(v));
// 다른 예제
function createTuple2(v, v2) {
    return [v, v2];
}
const t1 = createTuple2("user1", 1000);
function createTuple3(v, v2, v3) {
    return [v, v2, v3];
}
const t2 = createTuple3("user1", 1000, true);
