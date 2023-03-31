//klasy z blokami 7 ich w sumie jest
class Iblock {
    constructor() {
        this.color = "#1ae1fc";
        this.tiles = [
            { x: 4, y: 1, color:this.color},
            { x: 6, y: 1, color:this.color},
            { x: 5, y: 1, color:this.color},
            { x: 7, y: 1, color:this.color}
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
            { x: 4, y: 1, color:this.color},
            { x: 5, y: 2, color:this.color},
            { x: 4, y: 2, color:this.color},
            { x: 6, y: 2, color:this.color}
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
            { x: 6, y: 1, color:this.color},
            { x: 5, y: 2, color:this.color},
            { x: 4, y: 2, color:this.color},
            { x: 6, y: 2, color:this.color}
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
            { x: 5, y: 1, color:this.color},
            { x: 5, y: 2, color:this.color},
            { x: 6, y: 1, color:this.color},
            { x: 6, y: 2, color:this.color}
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
            { x: 6, y: 1, color:this.color },
            { x: 5, y: 1, color:this.color },
            { x: 4, y: 2, color:this.color },
            { x: 5, y: 2, color:this.color }
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
            { x: 4, y: 2, color:this.color},
            { x: 5, y: 2, color:this.color},
            { x: 6, y: 2, color:this.color},
            { x: 5, y: 1, color:this.color}
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
            { x: 4, y: 1 ,color:this.color},
            { x: 5, y: 1 ,color:this.color},
            { x: 5, y: 2 ,color:this.color},
            { x: 6, y: 2 ,color:this.color}
        ];
        this.tiles.forEach((element) => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            // cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        });
    }
}
class GhostBlock {
    constructor(color , tiles) {
        this.color = color
        this.tiles = tiles
    }
}
//globalne zmienne
let activeBlock = "";
let gameRunning = false;
let staticCords = [];
let ghostBlockCords = [];
let alreadyPressedHold = true;
let hardDropUsed = false;
let ghostPlaced = false;


window.addEventListener("keydown", clickEvent);

//funkcja do startu gry
function startGame() {
    if (!gameRunning)
    {
        shuffle(pieces);
        document.querySelector("#startGame").setAttribute("onclick","");
        let toClear = document.querySelectorAll(".column");
        document.querySelector("#score-text").innerHTML = "Score<p id='score'>0</p>";
        staticCords = [];
        activeBlock = ""
        toClear.forEach(element =>{
        element.style.color = "";
        element.style.backgroundColor = "";
        element.innerHTML = "";
        })
        gameRunning = true;
        window.addEventListener("keydown", clickEvent);

        $("#endScreen").fadeOut(300);
        
        createNewBlock(true);
        gameTick();
        alreadyPressedHold = false;
        document.querySelector("#holdP").src = "";

        toClear.forEach(element =>{
            element.style.border = ``;
        })
    }
}
function changeVisibility()
{
    $("#launch").css("display", "none");
    $("#end").css("display", "block");
}

function stopGame(){
    if (gameRunning)
    {
        staticCords = [];
        activeBlock = "";
        // document.querySelector("#score-text").innerHTML = "Score<p id='score'>0</p>";
        document.querySelector("#score-text").innerHTML = "GAME OVER";
        
        document.querySelector("#startGame").setAttribute("onclick","startGame()");
    
        document.getElementById('PlayerName').value = '';
        changeVisibility();
        $("#endScreen").fadeIn(300);
        
        let next = document.querySelectorAll(".nextP");
        next.forEach( element =>{
            element.src = "";
        })
    
        document.querySelector("#holdP").src = "";
        alreadyPressedHold = true;
    
        let toClear = document.querySelectorAll(".column");
        toClear.forEach(element =>{
            element.style.color = "";
            element.style.backgroundColor = "";
            element.innerHTML = "";
            element.style.border = ``;
        })
        gameRunning = false
    }
}
function checkGameOver(){
    staticCords.forEach(element => {
        console.log(element.y);
        if(element.y >= 1 && element.y <=2){
            gameRunning = false;
            window.removeEventListener("keydown",clickEvent);
            document.querySelector("#score-text").innerHTML = "GAME OVER";
            document.querySelector("#startGame").setAttribute("onclick","startGame()");
            document.getElementById('PlayerName').value = '';
            $("#endScreen").fadeIn(300);
            changeVisibility()
            // stopGame()
        }
    });
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

function createNewBlock(check) {
    if(gameRunning){
        if (check)
        {
            displayNextPieces(true)
            shufflePieces(true)
        }
        else
        {
            displayNextPieces(false)
            shufflePieces(false)
        }
        switch (currentPiece) {
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
        //ghostBlock = new GhostBlock(activeBlock.color, activeBlock.tiles);
        //console.log(ghostBlock);
    }
}
function drawBlock(){
    activeBlock.tiles.forEach((element) => {
        let cell = document.querySelector(`#row${element.y} #column${element.x}`);
        // cell.innerHTML = "X";
        cell.style.color = activeBlock.color;
        cell.style.backgroundColor = activeBlock.color;
        
    });    
    drawGhostBlock();
}
function clearBlock(){
    activeBlock.tiles.forEach((element) => {
        let cell = document.querySelector(`#row${element.y} #column${element.x}`);
        cell.innerHTML = "";
        cell.style.color = "";
        cell.style.backgroundColor = "";
    });
}
function drawGhostBlock(){
    //to tutaj ma zostac niezakomentowane bo smierc
    if(ghostBlockCords.length>0){
        ghostBlockCords.forEach(element => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`);
            cell.style.border = ``;
        });
    }
    ghostBlockCords = [];
    // --------------------------------------------------------rozwiązanie #1 --------- nie dziala w ogóle ale chyba bedzie latwiej ogarnąc --------------------------------------------------------------
    activeBlock.tiles.forEach(element => {
        ghostBlockCords.push({y:element.y, x:element.x});        
    });
    
    let validMoveGhost = true;
    while(!ghostPlaced){
        ghostBlockCords.forEach((element) => {
            if (element.y == 20) {//tutaj sprawdza czy nie wychodzi poza planszę
                validMoveGhost = false;
            }
            staticCords.forEach((cord) => {//ta pętla sprawdza czy blok nie wchodzi na któryś z statycznych już bloków
                if (cord.y == element.y + 1 && cord.x == element.x) {
                    validMoveGhost = false;
                }
            });
        });
        if(validMoveGhost){
            ghostBlockCords.forEach(element => {
                element.y = element.y + 1;
            });
        }
        else{
            ghostPlaced = true;
        }
    }
    ghostBlockCords.forEach(element => {
        let cell = document.querySelector(`#row${element.y} #column${element.x}`);
        cell.style.border = `4px solid ${activeBlock.color}`;
    });
    ghostPlaced = false;
        // --------------------------------------------------------rozwiązanie #2 --------- dziala umm jakos a ja nie mam pomyslu jak to ogarnać --------------------------------------------------------------
    // let activeBlockXCoords = [];
    // let validYCoords = [];
    // activeBlock.tiles.forEach(tile => {
    //      activeBlockXCoords.push(tile.x)
    // })
    // activeBlockXCoords = new Set(activeBlockXCoords);
    // let lowestY = activeBlock.tiles[0].y;
    // activeBlock.tiles.forEach(tile => {
    // if (tile.y < lowestY) {
    //   lowestY = tile.y;
    // }})
    // activeBlockXCoords.forEach(element => {
    //     for(let i = lowestY; i<20;i++){
    //         staticCords.forEach(coord => {       
    //             if(coord.x == element){
    //                 validYCoords.push(coord.y-1);
    //             }
    //         }); 
    //     }
    // })
    // if(validYCoords.length == 0){
    //     validYCoords.push(20);
    // }
    // let bestYCoord = Math.min.apply(Math, validYCoords) ;
    // let highestY = activeBlock.tiles[0].y;
    // activeBlock.tiles.forEach(tile => {
    // if (tile.y > highestY) {
    //   highestY = tile.y;
    // }
    // })
    // let differenceHighest = bestYCoord - highestY;
    // let differenceLowest = bestYCoord - lowestY;
    // let differenceFinal =  0;
    // if(differenceLowest < differenceHighest && bestYCoord < 20){
    //     differenceFinal = differenceLowest;
    // }
    // else if(differenceLowest >= differenceHighest){
    //     differenceFinal = differenceHighest
    // }
    // activeBlock.tiles.forEach(element => {
    //     ghostBlockCords.push({y:element.y + differenceFinal, x:element.x});        
    // });
    // ghostBlockCords.forEach(element => {
    //     let cell = document.querySelector(`#row${element.y} #column${element.x}`);
    //     cell.style.border = `4px solid ${activeBlock.color}`;
    // });
    
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
    if(gameRunning){
        const pressedKey = event.keyCode;
        const right = 39;
        const left = 37;
        const down = 40;
        const rotateLeft1 = 88;
        const rotateLeft2 = 38;
        const rotateRight1 = 90;
        const rotateRight2 = 17;
        const instantDown = 32;
        const hold1 = 67;
        const hold2 = 16;
    
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
            case rotateRight1:
            case rotateRight2:
                rotateBlockRight();
                break;
            case rotateLeft1:
            case rotateLeft2:
                rotateBlockLeft();
                break;
            case hold1:
            case hold2:
                hold();
                break;
            case instantDown:
                hardDrop();
        }
    }
}
//rusza blok w dół
function moveBlockDown() {
    if(gameRunning){
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
            hardDropUsed = true;
        }
    }
}
function hardDrop(){
    if(gameRunning){
        while(!hardDropUsed){
            moveBlockDown();
        }
        hardDropUsed = false;
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
    checkGameOver()
    createNewBlock(true);
    deleteFullLines();
    alreadyPressedHold = false;
}
function deleteFullLines(){
    let linesToCheck = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
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
let currentPiece;
shuffle(pieces);

function shufflePieces(check)
{
    if (pieces.length <= 8)
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

    // currentPiece = p;
    if (check)
    {
        pieces.shift();
    }
    let p = pieces[0];
    if (check)
    {
        currentPiece = p;
    }
    // console.log(p)
    return p;
}

const pieceImages = ["Ipiece.png", "Ipiece.png", "Jpiece.png", "Jpiece.png", "Lpiece.png", "Lpiece.png", "Opiece.png", "Opiece.png", "Spiece.png", "Spiece.png", "Tpiece.png", "Tpiece.png", "Zpiece.png", "Zpiece.png"]

function displayNextPieces(check)
{
    if (check)
    {
        let next = document.querySelectorAll(".next-piece");
        let srcs = document.querySelectorAll(".nextP");
        for (let i = 0; i < next.length; i++) {
            // next[i].innerHTML = pieces[i+1];
            // console.log(srcs[i].getAttribute('src'))
            // console.log(pieceImages[pieces[i]])
            srcs[i].src = ("images/Pieces/" + pieceImages[pieces[i+2] - 1]);
        }
        // console.log(pieceImages[pieces[1] - 1] + " " + pieceImages[pieces[2] - 1] + " " + pieceImages[pieces[3] - 1] + " " + pieceImages[pieces[4] - 1] + " " + pieceImages[pieces[5] - 1] + " " + pieceImages[pieces[6] - 1])
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

let heldPiece;
function hold()
{
    let hold = document.querySelector("#holdP");
    let heldPieceImage = pieceImages[currentPiece-1];
    let temp;

    if (!alreadyPressedHold)
    {
        if (!hold.getAttribute('src'))
        {
            hold.src = ("images/Pieces/" + heldPieceImage);
            clearBlock()
            heldPiece = currentPiece;
            createNewBlock(true)
        }
        else
        {
            hold.src = ("images/Pieces/" + pieceImages[currentPiece-1]);
            temp = heldPiece;
            heldPiece = currentPiece;
            currentPiece = temp;
            clearBlock()
            createNewBlock(false);
            console.log(currentPiece);
        }
        alreadyPressedHold = true;
    }
}