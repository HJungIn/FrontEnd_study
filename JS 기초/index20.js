// Promise 
const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        // resolve('result'); // 성공했을 때 => then으로 이동
        reject(new Error()); // 실패했을 때 => catch로 이동
    },1000)

});

myPromise.then(result => {
    console.log(result);
}).catch(e => {
    console.error(e);
})

//
function increaseAndPoint(n){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const value = n+1;
            if(value === 5){
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        },1000);
    });
}

increaseAndPoint(0).then( n => { //1
    return increaseAndPoint(n); //2
}).then( n => {
    return increaseAndPoint(n); //3
}).then( n => {
    console.log('result:',n); //result : 3
    return increaseAndPoint(n); // 4
}).then( n => {
    return increaseAndPoint(n); // 아무일도 일어나지 않음
}).catch(e => {
    console.log(e); // 5일때 에러 발생
});

// 33~44를 이렇게도 사용 가능
increaseAndPoint(0).then(increaseAndPoint)
.then(increaseAndPoint)
.then(increaseAndPoint)
.then(increaseAndPoint)
.then(increaseAndPoint)
.catch(e => {
    console.log(e); // 5일때 에러 발생
});