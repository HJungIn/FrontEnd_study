//함수의 기본 파라미터 : '=' 사용
//1번 방법 : 기본
function calculateCircleAria(r = 1) { //1이 함수에 파라미터를 넣지 않았을 때의 기본값
    return Math.PI * r * r;
}
const area = calculateCircleAria();
console.log(area);

//2번 방법 : 화살표 함수 사용
const calculateCircleAria1 = (r = 1) => {
    return Math.PI * r * r;
}