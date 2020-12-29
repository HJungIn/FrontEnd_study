//카운터 만들기 : 숫자 늘리고 줄이는 것
const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

console.log(number.innerText); // <h2 id="number">0</h2> 의 0
console.log(increase.offsetTop); // <button id="increase">+1</button> 의 최대값 71
console.log(decrease.id); // <button id="decrease">-1</button> 의 decrease

increase.onclick = () => {
    const current = parseInt(number.innerText, 10); // number.innerText라는 문자열을 10진수의 숫자로 변환한다.
    number.innerText = current+1;
    console.log('increase가 클릭됨');
}

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10); // number.innerText라는 문자열을 10진수의 숫자로 변환한다.
    number.innerText = current-1;
    console.log('decrease 클릭됨');
}

// id 가 없을 때 => 태그 이름으로 찾기
const buttons = document.querySelectorAll('button');
const [increase1, decrease1] = buttons;