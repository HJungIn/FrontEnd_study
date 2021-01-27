// 파라미터에 제네릭 타입이 있을 떄 => 함수명<T> 
function createPromise<T>(x: T, timeout: number) { // x를 T로 파라미터화
    
    return new Promise<T>((resolve, reject) => {
    // return new Promise((resolve: (v:T) => void, reject) => {
        setTimeout(() => {
           resolve(x); 
        }, timeout);
    });
}
// createPromise<string>("str",100)
// createPromise("1",100)
createPromise(1,100)
    .then(v => console.log(v));

// 다른 예제
function createTuple2<T, U>(v:T, v2:U): [T,U] {
    return [v, v2];
} 
const t1 = createTuple2("user1",1000);

function createTuple3<T, U, D>(v:T, v2:U, v3: D): [T,U,D] {
    return [v, v2,v3];
} 
const t2 = createTuple3("user1",1000, true);