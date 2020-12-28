//비구조화 할당(구조 분해)
// == 객체 비구조화 할당 ==
const object = {a:1, b:2};
const {a,b} = object;
console.log(a); //1
console.log(b); //2

function print({a,b}){
    console.log(a);
    console.log(b); //b에 값이 없다면 undefined
}
print(object); 

const object1 = {aa:1};
const {aa,bb=3} = object1;
console.log(aa); //1
console.log(bb); //3


const animal = {
    name:'멍멍이',
    type:'개'
};
const {name : nickname} = animal; //{name은 원래 있던 이름 : animal은 새로 짓고 싶은 이름}
console.log(nickname); // 멍멍이

// == 배열 비구조화 할당 ==
const array = [1,2];
const [one, two] = array;
console.log(one);
console.log(two);

// == 객체 깊숙한 곳에 들어있는 값 꺼내오기
const deepObject = {
    state:{
        information:{
            name:'velo',
            languages: ['korean', 'english', 'chinese']
        }
    },
    value: 5
}

//방법1 : 추천
const {name, languages} = deepObject.state.information;
const { value } = deepObject;
const extracted = {
    name, 
    languages,
    value
};
console.log(extracted);

//방법 2
const {
    state: {
        information: {
            name, languages: [firstLang, secoundLang]
        }
    },
    value
} = deepObject;
const extracted1 = {
    name,
    firstLang, secoundLang,
    value
};
console.log(extracted1);