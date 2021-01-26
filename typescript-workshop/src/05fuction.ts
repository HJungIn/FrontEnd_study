//더하기
function add(x: number, y: number): number {
    return x + y;
}
const result = add(1,2);

//더하기 화살표 함수로
const add2 = (a:number, b: number): number => a+b;

//기본값
function buildUserInfo(name = "-", email = "-"){ // optional + 기본값
    return {name, email};
}
const user = buildUserInfo();


//오버로드
interface Storage {
    a:string;
}
interface ColdStorage {
    b:string;
}
function store(type: "통조림"): Storage; //type에 통조림이 들어오면 Storage
function store(type: "아이스크림"): ColdStorage;// 아이스크림이 들어오면 ColdStorage
function store(type: "통조림" | "아이스크림") {
    if(type === "통조림"){
        return {a:"통조림"}
    } else if(type === "아이스크림"){
        return {b:"아이스크립"}
    } else {
        throw new Error('unsupprted type');
    }
}
const s = store("아이스크림");