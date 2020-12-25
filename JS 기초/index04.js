// 조건문
// === if else ===
const a1 = 1;
if (a1 + 1 == 2) {
    console.log('a1+1 = 2이다');
}

const a2 = 1;
if (a2 + 1 == 2) {
    const a2 = 2; // 다른 코드블록에서는 동일한 변수명 사용 가능  => var일때는 2개가 합쳐짐
    console.log('if문 안의 a2값은 ' + a2);
}
console.log('if문 밖의 a2값은 ' + a2);

const a3 = 10;
if (a3 > 15) {
    console.log('a3은 15보다 크다.');
} else { //else if도 가능
    console.log('a3은 15보다 크지 않다.');
}

// === switch case ===
const device = 'iphone';
switch(device){
    case 'iphone':
        console.log('아이폰!');
        break;
    case 'ipad':
        console.log('아이패드!');
        break;
    default:
        console.log('몰라여');
}