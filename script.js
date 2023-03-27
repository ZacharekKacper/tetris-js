//klasy z blokami 7 ich w sumie jest
class Iblock {
    constructor() {
        this.color = "#1ae1fc";
        this.tiles = [
            { x: 1+3, y: 1, color:this.color},
            { x: 2+3, y: 1, color:this.color},
            { x: 3+3, y: 1, color:this.color},
            { x: 4+3, y: 1, color:this.color}
        ];
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            // cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
}
class Jblock {
    constructor() {
        this.color = "#0a34bd";
        this.tiles = [
            { x: 1+3, y: 1, color:this.color},
            { x: 2+3, y: 2, color:this.color},
            { x: 1+3, y: 2, color:this.color},
            { x: 3+3, y: 2, color:this.color}
        ];
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            // cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
}
class Lblock {
    constructor() {
        this.color = "#ff8800";
        this.tiles = [
            { x: 3+3, y: 1, color:this.color},
            { x: 2+3, y: 2, color:this.color},
            { x: 1+3, y: 2, color:this.color},
            { x: 3+3, y: 2, color:this.color}
        ];
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            // cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
}
class Oblock {
    constructor() {
        this.color = "#ffe600";
        this.tiles = [
            { x: 1+4, y: 1, color:this.color},
            { x: 1+4, y: 2, color:this.color},
            { x: 2+4, y: 1, color:this.color},
            { x: 2+4, y: 2, color:this.color}
        ];
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            // cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
}
class Sblock {
    constructor() {
        this.color = "#0cd10c";
        this.tiles = [
            { x: 1+3, y: 2, color:this.color },
            { x: 2+3, y: 2, color:this.color },
            { x: 2+3, y: 1, color:this.color },
            { x: 3+3, y: 1, color:this.color }
        ];
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            // cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
}
class Tblock {
    constructor() {
        this.color = "#961396";
        this.tiles = [
            { x: 1+3, y: 2, color:this.color},
            { x: 2+3, y: 2, color:this.color},
            { x: 3+3, y: 2, color:this.color},
            { x: 2+3, y: 1, color:this.color}
        ];
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            // cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
}
class Zblock {
    constructor() {
        this.color = "#eb0f0f";
        this.tiles = [
            { x: 1+3, y: 1 ,color:this.color},
            { x: 2+3, y: 1 ,color:this.color},
            { x: 2+3, y: 2 ,color:this.color},
            { x: 3+3, y: 2 ,color:this.color}
        ];
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            // cell.innerHTML = "X";
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
    if (!gameRunning)
    {
        gameRunning = true;
        createNewBlock();
        gameTick();
    }
}
function stopGame(){
    staticCords = [];
    activeBlock = "";
    shuffle(pieces);
    
    let next = document.querySelectorAll(".nextP");
    next.forEach( element =>{
        element.src = "";
    })

    let toClear = document.querySelectorAll(".column");
    toClear.forEach(element =>{
        element.style.color = "";
        element.style.backgroundColor = "";
        element.innerHTML = "";
    })
    gameRunning = false
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
    displayNextPieces()
    switch (shufflePieces()) {
        case 1:
        case 2:
            activeBlock = new Iblock();break;
        case 3:
        case 4:
            activeBlock = new Jblock();break;
        case 5:
        case 6:
            activeBlock = new Lblock();break;
        case 7:
        case 8:
            activeBlock = new Oblock();break;
        case 9:
        case 10:
            activeBlock = new Sblock();break;
        case 11:
        case 12:
            activeBlock = new Tblock();break;
        case 13:
        case 14:
            activeBlock = new Zblock();break;
    }
}
function drawBlock(){
    activeBlock.tiles.forEach((element) => {
        let cell = document.querySelector(`#row${element.y} #column${element.x}`);
        // cell.innerHTML = "X";
        cell.style.color = activeBlock.color;
        cell.style.backgroundColor = activeBlock.color;
    });
}
function clearBlock(){
    activeBlock.tiles.forEach((element) => {
        let cell = document.querySelector(`#row${element.y} #column${element.x}`);
        cell.innerHTML = "";
        cell.style.color = "";
        cell.style.backgroundColor = "";
    });
}
function rotateBlockLeft() {
    clearBlock()
    const rotatedTiles = [];
    const center = activeBlock.tiles[1];
    activeBlock.tiles.forEach((tile) => {
      // Translate coordinates to origin and rotate by -90 degrees
      const color = tile.color;
      const x = -(tile.y - center.y) + center.x;
      const y = (tile.x - center.x) + center.y;
      // Check if tile is within bounds
      if (x < 1 || x > 10 || y < 1 || y > 20) {
        drawBlock()
        throw new Error("Block cannot be rotated outside of the board.");
      }
      // Check if tile overlaps with static coordinates
      if (staticCords.some((cord) => cord.x === x && cord.y === y)) {
        drawBlock()
        throw new Error("Block cannot be rotated into static coordinates.");
      }
      rotatedTiles.push({ x, y, color});
    });
    activeBlock.tiles = rotatedTiles;
    drawBlock()
  }
  function rotateBlockRight() {
    clearBlock()
    const rotatedTiles = [];
    const center = activeBlock.tiles[1];
    activeBlock.tiles.forEach((tile) => {
      // Translate coordinates to origin and rotate by 90 degrees
      const color = tile.color;
      const x = tile.y - center.y + center.x;
      const y = -(tile.x - center.x) + center.y;
      // Check if tile is within bounds
      if (x < 1 || x > 10 || y < 1 || y > 20) {
        drawBlock();
        throw new Error("Block cannot be rotated outside of the board.");
      }
      // Check if tile overlaps with static coordinates
      if (staticCords.some((cord) => cord.x === x && cord.y === y)) {
        drawBlock();
        throw new Error("Block cannot be rotated into static coordinates.");
      }
      rotatedTiles.push({ x, y , color});
    });
    activeBlock.tiles = rotatedTiles;
    drawBlock()
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
        case rotateRight:
            rotateBlockRight();
            break;
        case rotateLeft:
            rotateBlockLeft();
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
        drawBlock();
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
        drawBlock();
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
        drawBlock();
    }
}

function addToStaticBlocks() {//dodaje kordy elementu do tablicy z statycznymi kordynatami
    activeBlock.tiles.forEach((element) => {
        staticCords.push(element);
    });
    console.log(staticCords);
    createNewBlock();
    deleteFullLines();
}
function deleteFullLines(){
    let linesToCheck = [
        staticCords[staticCords.length - 1].y,
        staticCords[staticCords.length - 2].y,
        staticCords[staticCords.length - 3].y,
        staticCords[staticCords.length - 4].y
    ]
    linesToCheck = new Set(linesToCheck);
    linesToDelete = []
    linesToCheck.forEach(line => {
        let count = 0;
        staticCords.forEach(cords => {
            if(cords.y == line){
                count++;
            }
        });
        if(count == 10){
            linesToDelete.push(line);
        }
    });
    linesToDelete.forEach(line => {
        staticCords.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.innerHTML = "";
            cell.style.color = "";
            cell.style.backgroundColor = "";
        });
        // usuwa linie z static cordow
        for (let i = staticCords.length - 1; i >= 0; i--) {
            console.log(staticCords[i].y, line);
            if (staticCords[i].y === line) {
                staticCords.splice(i, 1);
            }
        }
        //zwiększa kordy tak by bloki spadly 
        staticCords.forEach((cord) => {
            if (cord.y < line) {
              cord.y++;
            }
          });


           staticCords.forEach((element) => {
             console.log(element);
             let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            //  cell.innerHTML = "X";
             cell.style.color = element.color;
             cell.style.backgroundColor = element.color;
         });
    });

}
let pieces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
shuffle(pieces);

function shufflePieces()
{
    if (pieces.length <= 7)
    {
        let a =[];
        for (let i = 1; i <= 14; i++) {
            if (!pieces.includes(i))
            {
                a.push(i);
            }
        }
        pieces = pieces.concat(shuffle(a));
    }

    let p = pieces[0];
    pieces.shift();
    // console.log(p)
    return p;
}

let pieceImages = ["Ipiece.png", "Ipiece.png", "Jpiece.png", "Jpiece.png", "Lpiece.png", "Lpiece.png", "Opiece.png", "Opiece.png", "Spiece.png", "Spiece.png", "Tpiece.png", "Tpiece.png", "Zpiece.png", "Zpiece.png"]

function displayNextPieces()
{
    let next = document.querySelectorAll(".next-piece");
    let srcs = document.querySelectorAll(".nextP");
    for (let i = 0; i < next.length; i++) {
        // next[i].innerHTML = pieces[i+1];
        // console.log(srcs[i].getAttribute('src'))
        // console.log(pieceImages[pieces[i]])
        srcs[i].src = ("images/" + pieceImages[pieces[i+1] - 1]);
    }
}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }