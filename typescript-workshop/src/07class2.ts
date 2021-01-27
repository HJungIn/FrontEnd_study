interface Person {
    name: string;
    say(message: string): void;
}
interface Programmer {
    writeCode(requirement: string): string;
}

class KoreanProgrammer implements Person, Programmer {
    constructor(public name: string){

    }
    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement + '...';
    }
    say(message: string): void {
        console.log(message);
        
    }

    loveKimchi () {
        console.log('love');
        
    }
}

const person1 = new KoreanProgrammer('a');

//완성이 되지 않은 클래스
abstract class Korean implements Person { //추상 클래스

    public abstract jumin: number;

    constructor(public name: string){

    }
    say(message: string): void {
        console.log(message);
    }
 
    abstract loveKimchi(): void; //abstract로 정의
}

class KoreanProgrammer2 extends Korean implements Programmer {
    
    constructor(public name: string, public jumin: number){
        super(name); // 부모 클래스를 호출해야만 한다.
    }
    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement + '...';
    }
    say(message: string): void {
        console.log(message);
        
    }

    loveKimchi () {
        console.log('love');
        
    }
}
const person2 = new KoreanProgrammer2('whar', 11);