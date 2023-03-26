//klasy z blokami 7 ich w sumie jest
class Iblock {
    constructor() {
        this.color = "cyan";
        this.tiles = [
            { x: 1, y: 1, color:this.color},
            { x: 2, y: 1, color:this.color},
            { x: 3, y: 1, color:this.color},
            { x: 4, y: 1, color:this.color},
        ];
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
    rotateLeft(){

    }
    rotateRight(){
        
    }
}
class Jblock {
    constructor() {
        this.color = "blue";
        this.tiles = [
            { x: 1, y: 1, color:this.color},
            { x: 1, y: 2, color:this.color},
            { x: 2, y: 2, color:this.color},
            { x: 3, y: 2, color:this.color},
        ];
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
    rotateLeft(){

    }
    rotateRight(){

    }
}
class Lblock {
    constructor() {
        this.color = "orange";
        this.tiles = [
            { x: 3, y: 1, color:this.color},
            { x: 1, y: 2, color:this.color},
            { x: 2, y: 2, color:this.color},
            { x: 3, y: 2, color:this.color},
        ];
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
    rotateLeft(){

    }
    rotateRight(){
        
    }
}
class Oblock {
    constructor() {
        this.color = "yellow";
        this.tiles = [
            { x: 1, y: 1, color:this.color},
            { x: 1, y: 2, color:this.color},
            { x: 2, y: 1, color:this.color},
            { x: 2, y: 2, color:this.color},
        ];
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
    rotateLeft(){

    }
    rotateRight(){
        
    }
}
class Sblock {
    constructor() {
        this.color = "lime";
        this.tiles = [
            { x: 1, y: 2, color:this.color },
            { x: 2, y: 2, color:this.color },
            { x: 2, y: 1, color:this.color },
            { x: 3, y: 1, color:this.color },
        ];
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
    rotateLeft(){

    }
    rotateRight(){
        
    }
}
class Tblock {
    constructor() {
        this.color = "purple";
        this.tiles = [
            { x: 1, y: 2, color:this.color},
            { x: 2, y: 2, color:this.color},
            { x: 3, y: 2, color:this.color},
            { x: 2, y: 1, color:this.color},
        ];
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
    rotateLeft(){

    }
    rotateRight(){
        
    }
}
class Zblock {
    constructor() {
        this.color = "red";
        this.tiles = [
            { x: 1, y: 1 ,color:this.color},
            { x: 2, y: 1 ,color:this.color},
            { x: 2, y: 2 ,color:this.color},
            { x: 3, y: 2 ,color:this.color},
        ];
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
    rotateLeft(){

    }
    rotateRight(){
        
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
        checkFullLines();
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
    checkFullLines();
}
function checkFullLines(){
    // ---------------------------- to działa ale prawie idk czemu rozjebane to jest
    // let lastStaticCords = [
    //     staticCords[staticCords.length-1],
    //     staticCords[staticCords.length-2],
    //     staticCords[staticCords.length-3],
    //     staticCords[staticCords.length-4]
    // ]
    // let yCordinates = [];
    // lastStaticCords.forEach(element => {
    //     yCordinates.push(element.y);
    // });
    // yCordinates = new Set(yCordinates);
    // console.log(staticCords);
    // yCordinates.forEach(element => {
    //     let row = document.querySelectorAll(`#row${element} div`);
    //     let count = 0
    //     row.forEach(cell => {
    //         if(cell.innerHTML != ""){
    //             count++;
    //         }
    //     })
    //     if(count==10){
    //         for (let i = 0; i < staticCords.length; i++) {
    //             if(staticCords[i].y == element){
    //                 staticCords.splice(i,1);
    //             }
    //             else if(staticCords[i].y < element){
    //                 let cell = document.querySelector(`#row${staticCords[i].y} #column${staticCords[i].x}`);
    //                 cell.innerHTML = "";
    //                 cell.style.color = "";
    //                 cell.style.backgroundColor = "";
    //                 cell = document.querySelector(`#row${staticCords[i].y + 1} #column${staticCords[i].x}`);
    //                 staticCords[i].y + 1
    //                 cell.innerHTML = "X";
    //                 cell.style.color = staticCords[i].color;
    //                 cell.style.backgroundColor = staticCords[i].color;
    //             }
    //         }
    //     }
        
    // })
}
