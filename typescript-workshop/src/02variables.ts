var score1 = 0; //var : 함수단위의 scope
let score2 = 200; // let : 블록 단위의 scope
const defaultScore = 0; //const : 상수 : 선언과 동시에 값 할당 하기
function outer(){
    
    if(true){
        var score = 0
    }

    for(var i=0;i<3;i++){ // 3 3 3 => 3으로 전부 나옴
        // for(let i=0;i<3;i++){ // 0 1 2
            setTimeout(function(){
            console.log(i);
        }, 100);
    }

    console.log(score); //if문에 있는 score 가져오기 가능
    
}
outer();