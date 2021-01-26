//더하기
function add(x, y) {
    return x + y;
}
const result = add(1, 2);
//더하기 화살표 함수로
const add2 = (a, b) => a + b;
//기본값
function buildUserInfo(name = "-", email = "-") {
    return { name, email };
}
const user = buildUserInfo();
function store(type) {
    if (type === "통조림") {
        return { a: "통조림" };
    }
    else if (type === "아이스크림") {
        return { b: "아이스크립" };
    }
    else {
        throw new Error('unsupprted type');
    }
}
const s = store("아이스크림");
