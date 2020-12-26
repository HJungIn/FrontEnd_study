//반복문
for(let i=0;i<10;i++){
    console.log(i);
}

for(let i=10;i>0;i--){
    console.log(i);
}

for(let i=10;i>0;i-=2){
    console.log(i);
}

const names = ['멍멍이','야옹이','멍뭉이'];
for(let i =0;i<names.length;i++){
    console.log(names[i]);
}

// == while ==
let i =0;
while(i<10){
    console.log(i);
    i++;
}

let isFun = false;
while(isFun===false){ //!isFun
    console.log(i);
    i++;
    if(i===30){
        isFun = true;
    }
}

// == for of : 배열을 다룰 때 사용 => 배열안에 있는 것을 뺄 때 사용 == 
const numbers = [10,20,30,40,50];
for(let number of numbers){
    console.log(number);
}

// == for in : 객체를 다룰 때 사용 ==
const doggy = {
    name:'멍멍이',
    sound:'멍멍',
    age:2
};
console.log(Object.entries(doggy)); // 엔트리들 가져오기
console.log(Object.keys(doggy)); //키 값 빼오기
console.log(Object.values(doggy));  // 값을 뺴오기

for(let key in doggy){
    console.log(`${key}:${doggy[key]}`);
}

// == continue :넘어가기, break :빠져나오기 ==