//klasy z blokami 7 ich w sumie jest
class Iblock {
    constructor() {
        this.tiles = [
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 3, y: 1 },
            { x: 4, y: 1 },
        ];
        this.color = "cyan";
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
}
class Jblock {
    constructor() {
        this.tiles = [
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 2, y: 2 },
            { x: 3, y: 2 },
        ];
        this.color = "blue";
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
}
class Lblock {
    constructor() {
        this.tiles = [
            { x: 3, y: 1 },
            { x: 1, y: 2 },
            { x: 2, y: 2 },
            { x: 3, y: 2 },
        ];
        this.color = "orange";
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
}
class Oblock {
    constructor() {
        this.tiles = [
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 2, y: 1 },
            { x: 2, y: 2 },
        ];
        this.color = "yellow";
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
}
class Sblock {
    constructor() {
        this.tiles = [
            { x: 1, y: 2 },
            { x: 2, y: 2 },
            { x: 2, y: 1 },
            { x: 3, y: 1 },
        ];
        this.color = "lime";
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
}
class Tblock {
    constructor() {
        this.tiles = [
            { x: 1, y: 2 },
            { x: 2, y: 2 },
            { x: 3, y: 2 },
            { x: 2, y: 1 },
        ];
        this.color = "purple";
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
}
class Zblock {
    constructor() {
        this.tiles = [
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 2 },
        ];
        this.color = "red";
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
}
//globalne zmienne
let activeBlock = "";
let gameRunning = false;
let staticCords = [];
window.addEventListener("keydown", clickEvent);

//funkcja do startu gry
function startGame() {
    gameRunning = true;
    createNewBlock();
    gameTick();
}
//1 tick to jedno przejscie klocka w dół
function gameTick() {
    if (gameRunning) {
        setTimeout(() => {
            moveBlockDown();
            gameTick();
        }, 1000);
    }
}
//tworzy nowy blok z 7 dostępnych
//todo: trzeba tu dodać by tworzyło ich więcej by w kolejce pokazywało
function createNewBlock() {
    let randomNumber = Math.floor(Math.random() * 7 + 1);
    switch (randomNumber) {
        case 1:activeBlock = new Iblock();break;
        case 2:activeBlock = new Jblock();break;
        case 3:activeBlock = new Lblock();break;
        case 4:activeBlock = new Oblock();break;
        case 5:activeBlock = new Sblock();break;
        case 6:activeBlock = new Tblock();break;
        case 7:activeBlock = new Zblock();break;
    }
}
//sprawdza co jest klinięte i wywołuje odpowiednie funkcje do tego
function clickEvent(event) {
    const pressedKey = event.keyCode;
    const right = 39;
    const left = 37;
    const down = 40;
    const rotateLeft = 65;
    const rotateRight = 68;
    const instantDown = 83;
    switch (pressedKey) {
        case right:
            moveBlockRight();
            break;
        case left:
            moveBlockLeft();
            break;
        case down:
            moveBlockDown();
            break;
    }
}
//rusza blok w dół
function moveBlockDown() {
    let validMove = true;
    activeBlock.tiles.forEach((element) => {
        if (element.y == 20) {//tutaj sprawdza czy nie wychodzi poza planszę
            validMove = false;
        }
        staticCords.forEach((cord) => {//ta pętla sprawdza czy blok nie wchodzi na któryś z statycznych już bloków
            if (cord.y == element.y + 1 && cord.x == element.x) {
                validMove = false;
            }
        });
    });
    if (validMove) {
        activeBlock.tiles.forEach((element) => {//ta pętla wymazuje blok 
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "";
            cell.style.color = "";
            cell.style.backgroundColor = "";
            element.y = element.y + 1;
        });
        activeBlock.tiles.forEach((element) => {//ta rysuje go odnowa w nowym miejscu
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "X";
            cell.style.color = activeBlock.color;
            cell.style.backgroundColor = activeBlock.color;
        });
    } else {
        // jeśli blok nie może dalej iść w dół to dodaje jego kordy do tablicy staticCords
        addToStaticBlocks();
    }
}
function moveBlockRight() {//wyglądaa praktyznie tak samo jak move down 
    let validMove = true;
    activeBlock.tiles.forEach((element) => {
        if (element.x == 10) {
            validMove = false;
        }
        staticCords.forEach((cord) => {
            if (cord.x == element.x + 1 && cord.y == element.y) {
                validMove = false;
            }
        });
    });
    if (validMove) {
        activeBlock.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "";
            cell.style.color = "";
            cell.style.backgroundColor = "";
            element.x = element.x + 1;
        });
        activeBlock.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "X";
            cell.style.color = activeBlock.color;
            cell.style.backgroundColor = activeBlock.color;
        });
    }
}
function moveBlockLeft() {//to samo co move right
    let validMove = true;
    activeBlock.tiles.forEach((element) => {
        if (element.x == 1) {
            validMove = false;
        }
        staticCords.forEach((cord) => {
            if (cord.x == element.x - 1 && cord.y == element.y) {
                validMove = false;
            }
        });
    });

    if (validMove) {
        activeBlock.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "";
            cell.style.color = "";
            cell.style.backgroundColor = "";
            element.x = element.x - 1;
        });
        activeBlock.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "X";
            cell.style.color = activeBlock.color;
            cell.style.backgroundColor = activeBlock.color;
        });
    }
}
function addToStaticBlocks() {//dodaje kordy elementu do tablicy z statycznymi kordynatami
    activeBlock.tiles.forEach((element) => {
        staticCords.push(element);
    });
    createNewBlock();
}
