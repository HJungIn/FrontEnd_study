 Redux-saga
 - redux-thunk 다음으로 가장 많이 사용되는 라이브러리(미들웨어)
 - redux-thunk의 경우엔 함수를 디스패치 할 수 있게 해주는 미들웨어
 - redux-saga의 경우엔, **액션을 모니터링**하고 있다가, 특정 액션이 발생하면 이에 따라 특정 작업을 하는 방식으로 사용함 (특정 작업 : ex) 특정 JS, 다른 액션을 디스패치, 상태 조회)
 - redux-saga는 redux-thunk로 못하는 다양한 작업들을 처리 할 수 있다.
    1. 비동기 작업을 할 때 기존 요청을 취소 처리 할 수 있습니다
    2. 특정 액션이 발생했을 때 이에 따라 다른 액션이 디스패치되게끔 하거나, 자바스크립트 코드를 실행 할 수 있습니다.
    3. 웹소켓을 사용하는 경우 Channel 이라는 기능을 사용하여 더욱 효율적으로 코드를 관리 할 수 있습니다
    4. API 요청이 실패했을 때 재요청하는 작업을 할 수 있습니다.

### 1. Generator 문법
 - Generator : 함수를 작성 할 떄 함수를 특정 구간에 멈춰놓을 수도 있고, 원할 때 다시 돌아가게 할 수도 있다. 그리고 결과값을 여러번 반환 할 수도 있다.
 - Generator 함수 : function에 *을 붙인다.
 
 - 예시1
function* generatorFunction() {
    console.log('안녕하세요?');
    yield 1; 
    console.log('제너레이터 함수');
    yield 2;
    console.log('function*');
    yield 3;
    return 4;
   
- yield : 함수의 흐름을 멈춰놨다가 1이라는 값을 반환해줄 수 있다.

 - generator : Generator 함수를 호출 한 뒤의 결과물


const generator = generatorFunction();
generator // : 확인하는 것으로 실행되는 건 아님
   rator.next() // : 실행시키는 것 



//결과
genrator.next()
>> 안녕하세요?
   {value: 1, done: false}

genrator.next()
>> 제너레이터 함수
   {value: 2, done: false}

genrator.next()
>> function*
   {value: 3, done: false}

genrator.next()
   {value: 4, done: true}


 - 예시2


function* sumGenerator() {
    console.log('sumGenerator이 시작됐습니다.');
    let a = yield; //next로 호출하는 param을 a변수에 담아줄 수 있다.
    console.log('a값을 받았습니다.');
    let b = yield;
    console.log('b값을 받았습니다.');
    yield a + b;
   

   st sum = sumGenerator()



//결과
sum.next()
>> sumGenerator이 시작됐습니다.
   {value: undefined, done: false}

sum.next(2)
>> a값을 받았습니다.
   {value: undefined, done: false}

sum.next(5)
>> b값을 받았습니다.
   {value: 7, done: true}


 - 예시 3


function* inifiniteAddGenerator() {
    let result = 0;
		while(true){
			result += yield result;
		}
   

   st add = inifiniteAddGenerator();



//결과
add.next()
>> {value: 0, done: false}

add.next(2)
>> {value: 2, done: false}

add.next(5)
>> {value: 7, done: false}
   


⇒ 결론 : redux-saga는 Generator에 기반한 미들웨어