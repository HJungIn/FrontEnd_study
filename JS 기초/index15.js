//조건문 더 스마트하게 쓰기
function isAnimal(text){
    const animals = ['고양이', '개', '거북이', '너구리'];
    return animals.includes(text);
}
console.log(isAnimal('개')); //true
console.log(isAnimal('노트북')); //false

const isAnimal2 = (text) => ['고양이', '개', '거북이', '너구리'].includes(text);

//-----
function getSound(animal){
    const sounds = {
        개: '멍멍',
        고양이: '야옹',
        참새 : '짹짹',
        비둘기: '구구 구구'
    };
    return sounds[animal] || '...?';
}
console.log(getSound('개')); //멍멍
console.log(getSound('비둘기')); //구구 구구
console.log(getSound('인간')); // ...?

function makeSound(animal){
    const tasks = {
        개: () => {
            console.log('멍멍!');
        },
        고양이() {
            console.log('야옹!');
        },
        비둘기() {
            console.log('구구 구구');
        },
    }

    const task = tasks[animal];
    if(!task){
        console.log('...?');
        return;
    }
    task();

}
makeSound('개');
makeSound('비둘기');
makeSound('인간');