//비동기적 처리 : 동시에 여러가지 작업 실행이 가능하다.
function work(){

    //이부분이 있다면 비동기적 함수가 된다.
    setTimeout(() => {
        const start = Date.now();
        for(let i=0;i<1000000000;i++){

        }
        const end = Date.now();
        console.log(end - start + 'ms');

    }, 0); //0초가 흐른 후 특정작업을 하겠다

    /*이부분만 있다면 동기적 함수가 된다. => 하나끝나면 다른 하나실행하는 형식..
    const start = Date.now();
    for(let i=0;i<1000000000;i++){

    }
    const end = Date.now();
    console.log(end - start + 'ms'); //1000ms = 1s
    */
}
work();
console.log('다음 작업');
//동기적 결과 : 954ms 다음 작업
//비동기적 결과 : 다음 작업 954ms


// === 비동기적 함수에서 해당 작업이 끝나고 다른 무엇을 실행시키고 싶을 때 : callback함수를 파라미터로 전달함
function work2(callback){ //callback이라는 함수를 등록해 일의 마지막에 넣어 실행해준다.
    setTimeout(() => {
        const start = Date.now();
        for(let i=0;i<1000000000;i++){

        }
        const end = Date.now();
        console.log(end - start + 'ms');
        callback(end - start)
    }, 0); 
}

console.log('작업 시작');
work((ms) => {
    console.log('작업이 끝났어요');
    console.log(ms+'ms 걸렸다고 해요');
});
console.log('다음 작업');

// ex) 비동기적 작업을 할 때 : Ajax Web API요청, 파일읽기, 암호화/복호화, 작업예약