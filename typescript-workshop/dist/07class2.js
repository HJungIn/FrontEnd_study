class KoreanProgrammer {
    constructor(name) {
        this.name = name;
    }
    writeCode(requirement) {
        console.log(requirement);
        return requirement + '...';
    }
    say(message) {
        console.log(message);
    }
    loveKimchi() {
        console.log('love');
    }
}
const person1 = new KoreanProgrammer('a');
//완성이 되지 않은 클래스
class Korean {
    constructor(name) {
        this.name = name;
    }
    say(message) {
        console.log(message);
    }
}
class KoreanProgrammer2 extends Korean {
    constructor(name, jumin) {
        super(name); // 부모 클래스를 호출해야만 한다.
        this.name = name;
        this.jumin = jumin;
    }
    writeCode(requirement) {
        console.log(requirement);
        return requirement + '...';
    }
    say(message) {
        console.log(message);
    }
    loveKimchi() {
        console.log('love');
    }
}
const person2 = new KoreanProgrammer2('whar', 11);
