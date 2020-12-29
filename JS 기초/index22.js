// === Promise all : 배열안에 모든 값이 동시에 시작하고 모두 끝난 후에 동시에 결과가 나옴 => 가장 긴 시간이 걸린 애만큼 걸림
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async() => {
    await sleep(1000);
    return '멍멍이';
}

const getRabbit = async() => {
    await sleep(500);
    return '토끼';
}

const getTurtle = async() => {
    await sleep(3000);
    return '거북이';
}

async function process(){
    const start = Date.now();
    const results = await Promise.all([getDog(), getRabbit(), getTurtle()]); // 3개 중에 하나라도 에러가 나면 전체가 에러난 것으로 처리
    console.log(Date.now()-start); // 3000
    console.log(results); // [ '멍멍이', '토끼', '거북이' ]
}
process();


// === Promise race : 배열안에 모든 값이 동시에 시작하고 가장 먼저 끝난 값 하나만 나옴
async function process2(){
    const start = Date.now();
    const results = await Promise.race([getDog(), getRabbit(), getTurtle()]); // 3개 중에 가장 먼저 끝난 거 하나만 에러가 나면 에러로 처리, 뒤에 오는게 에러라면 에러로 처리 안함
    console.log(Date.now()-start); // 50
    console.log(results); // 토끼'
}
process2();

// 위에 process와 process2는 같이 시작은 되지만 아래 race가 더 먼저 출력되고 끝난다.