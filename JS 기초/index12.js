//Truthy and Falsy
//null 체킹
function print(person){
    if(person === undefined || person ===null){ // ==> if(!person)
        return;
    }
    console.log(person.name);
}

const person = null;
print(person);

//falsy => 모두 false..  이것들을 뺀 나머지는 모두 true
console.log(undefined);
console.log(null);
console.log(0);
console.log('');
console.log(NaN); // 1/'aaa' => 1나누기 문자열은 말이 안되는거
console.log(false);

const value = {a:1}; // truthy
const value2 = null; // falsy
if(value){
    console.log('value가 truthy하네요');
}
else{
    console.log('value가 falsy하네요');
}

const value3 = {};
const truthy = !!value; // truthy한 값이면 true로, falsy한 값이면 false로