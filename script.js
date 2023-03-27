//klasy z blokami 7 ich w sumie jest
class Iblock {
    constructor() {
        this.color = "cyan";
        this.tiles = [
            { x: 1, y: 1, color:this.color},
            { x: 2, y: 1, color:this.color},
            { x: 3, y: 1, color:this.color},
            { x: 4, y: 1, color:this.color}
        ];
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
        this.color = "blue";
        this.tiles = [
            { x: 1, y: 1, color:this.color},
            { x: 2, y: 2, color:this.color},
            { x: 1, y: 2, color:this.color},
            { x: 3, y: 2, color:this.color}
        ];
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
        this.color = "orange";
        this.tiles = [
            { x: 3, y: 1, color:this.color},
            { x: 2, y: 2, color:this.color},
            { x: 1, y: 2, color:this.color},
            { x: 3, y: 2, color:this.color}
        ];
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
        this.color = "yellow";
        this.tiles = [
            { x: 1, y: 1, color:this.color},
            { x: 1, y: 2, color:this.color},
            { x: 2, y: 1, color:this.color},
            { x: 2, y: 2, color:this.color}
        ];
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
        this.color = "lime";
        this.tiles = [
            { x: 1, y: 2, color:this.color },
            { x: 2, y: 2, color:this.color },
            { x: 2, y: 1, color:this.color },
            { x: 3, y: 1, color:this.color }
        ];
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
        this.color = "purple";
        this.tiles = [
            { x: 1, y: 2, color:this.color},
            { x: 2, y: 2, color:this.color},
            { x: 3, y: 2, color:this.color},
            { x: 2, y: 1, color:this.color}
        ];
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
        this.color = "red";
        this.tiles = [
            { x: 1, y: 1 ,color:this.color},
            { x: 2, y: 1 ,color:this.color},
            { x: 2, y: 2 ,color:this.color},
            { x: 3, y: 2 ,color:this.color}
        ];
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
function stopGame(){
    staticCords = [];
    activeBlock = "";
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
function drawBlock(){
    activeBlock.tiles.forEach((element) => {
        let cell = document.querySelector(`#row${element.y} #column${element.x}`);
        cell.innerHTML = "X";
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
             cell.innerHTML = "X";
             cell.style.color = element.color;
             cell.style.backgroundColor = element.color;
         });
    });

}
