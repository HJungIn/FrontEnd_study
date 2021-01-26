//exam1
interface TV {
    turnOn(): boolean; //정의
    turnOff(): void;
}

const myTV: TV = {
    turnOn(){ //구현

        return true;
    },
    turnOff(){

    }
};

function tryTurnOn(tv: TV){
    tv.turnOn();
}
tryTurnOn(myTV);


//exam2
interface Piece {
    move(from: Cell, to: Cell): boolean;
}

interface Cell {
    row: number;
    col: number;
    piece?: Piece; // optional
}
function createBoard(){
    const cells: Cell[] = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            cells.push({
                // row: row,
                // col: col,
                row, //이름이 같다면 생략 가능
                col,
            });
        }        
    }
    return cells;
}

const board = createBoard();
board[0].piece = {
    move(from: Cell, to:Cell){
        return true;
    }
}