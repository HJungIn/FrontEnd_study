//promise를 더 쉽게 사용하기 위한 async,await
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

//성공할 때
async function process(){ // resolve, reject를 쓰는 promise를 쓰려면 함수앞에 async 붙여주기 
    console.log('안녕하세여');
    await sleep(1000); // Promise 함수를 만들 때 await 사용
    console.log('반갑습니다.');
}

process();

//에러를 잡아낼 때 : try-catch 사용
async function makeError(){
    await sleep(1000);
    const error = new Error();
    throw error;
}

async function process2(){
    try {
        await makeError();
    } catch (e) {
        console.error(e);
    }
}

process2();