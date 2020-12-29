//모달 만들기

const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.querySelector('.modal-wrapper'); //클래스 찾을 떄

open.onclick = () => {
    modal.style.display = 'flex'; //띄우기
    console.log("켜기");
};

close.onclick = () => {
    modal.style.display = 'none'; //사라지게 하기
    console.log("끄기");
};