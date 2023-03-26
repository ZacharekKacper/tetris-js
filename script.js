class Iblock{
    constructor(){
        this.tiles = [
            {x:1,y:1},
            {x:2,y:1},
            {x:3,y:1},
            {x:4,y:1}
        ]
        this.color = "blue";
        this.tiles.forEach(element => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`)
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        })        
    }
}
class Jblock{
    constructor(){
        this.tiles = [
            {x:1,y:1},
            {x:1,y:2},
            {x:2,y:2},
            {x:3,y:2}
        ]
        this.color = "cyan";
        this.tiles.forEach(element => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`)
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        })        
    }
}
class Lblock{
    constructor(){
        this.tiles = [
            {x:3,y:1},
            {x:1,y:2},
            {x:2,y:2},
            {x:3,y:2}
        ]
        this.color = "orange";
        this.tiles.forEach(element => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`)
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        })        
    }
}
class Oblock{
    constructor(){
        this.tiles = [
            {x:1,y:1},
            {x:1,y:2},
            {x:2,y:1},
            {x:2,y:2}
        ]
        this.color = "yellow";
        this.tiles.forEach(element => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`)
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        })        
    }
}
class Sblock{
    constructor(){
        this.tiles = [
            {x:1,y:2},
            {x:2,y:2},
            {x:2,y:1},
            {x:3,y:1}
        ]
        this.color = "green";
        this.tiles.forEach(element => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`)
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        })        
    }
}
class Tblock{
    constructor(){
        this.tiles = [
            {x:1,y:2},
            {x:2,y:2},
            {x:3,y:2},
            {x:2,y:1}
        ]
        this.color = "purple";
        this.tiles.forEach(element => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`)
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        })
    }
}
class Zblock{
    constructor(){
        this.tiles = [
            {x:1,y:1},
            {x:2,y:1},
            {x:2,y:2},
            {x:3,y:2}
        ]
        this.color = "red";
        this.tiles.forEach(element => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`)
            cell.innerHTML = "X";
            cell.style.color = this.color;
            cell.style.backgroundColor = this.color;
        })
    }
}

let activeBlock = "";

let gameRunning = false
let staticCords = [];
window.addEventListener("keydown", clickEvent);



function startGame(){
    gameRunning = true;
    createNewBlock()
    gameTick()

}
function gameTick(){
    if(gameRunning){
        setTimeout(()=>{
            moveBlockDown();
            gameTick();
        },1000);
    }
}
function createNewBlock(){
    let randomNumber = Math.floor(((Math.random())*7)+1);
    switch(randomNumber){
        case 1: activeBlock = new Iblock; break;
        case 2: activeBlock = new Jblock; break;
        case 3: activeBlock = new Lblock; break;
        case 4: activeBlock = new Oblock; break;
        case 5: activeBlock = new Sblock; break;
        case 6: activeBlock = new Tblock; break;
        case 7: activeBlock = new Zblock; break;
    }
}
function clickEvent(event){
    const pressedKey = event.keyCode;
    const right = 39;
    const left = 37;
    const down = 40;
    const rotateLeft = 65;
    const rotateRight = 68;
    const instantDown = 83;
    switch(pressedKey){
        case right: moveBlockRight();break;
        case left: moveBlockLeft();break;
        case down: moveBlockDown();break;
    }
}
function moveBlockDown(){
    let validMove = true;
    activeBlock.tiles.forEach(element => {
        
        if(element.y==20){
            validMove = false
        }
        staticCords.forEach(cord => {
            
            if(cord.y == element.y + 1 && cord.x == element.x){
                validMove = false
            }
        })       
    } )
    if(validMove){
        activeBlock.tiles.forEach(element => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`)
            cell.innerHTML = "";
            cell.style.color = "white";
            cell.style.backgroundColor = "white";
            element.y = element.y + 1;        
        } )
        activeBlock.tiles.forEach(element => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`)
            cell.innerHTML = "X";
            cell.style.color = activeBlock.color;
            cell.style.backgroundColor = activeBlock.color;
        } )
    }
    else{
        addToStaticBlocks();
    }
}
function moveBlockRight(){
    let validMove = true;
    activeBlock.tiles.forEach(element => {
        if(element.x==10){
            validMove = false
        }
        staticCords.forEach(cord => {
            
            if(cord.x == element.x + 1 && cord.y == element.y){
                validMove = false
            }
        })
    } )
    if(validMove){
        activeBlock.tiles.forEach(element => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`)
            cell.innerHTML = "";
            cell.style.color = "white";
            cell.style.backgroundColor = "white";
            element.x = element.x + 1;        
        } )
        activeBlock.tiles.forEach(element => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`)
            cell.innerHTML = "X";
            cell.style.color = activeBlock.color;
            cell.style.backgroundColor = activeBlock.color;
        } )
    }
}
function moveBlockLeft(){
    let validMove = true;
    activeBlock.tiles.forEach(element => {
        if(element.x==1 ){
            validMove = false
        }
        staticCords.forEach(cord => {
            
            if(cord.x == element.x - 1 && cord.y == element.y){
                validMove = false
            }
        })
    })
    
    if(validMove){
        activeBlock.tiles.forEach(element => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`)
            cell.innerHTML = "";
            cell.style.color = "white";
            cell.style.backgroundColor = "white";
            element.x = element.x - 1;        
        } )
        activeBlock.tiles.forEach(element => {
            let cell = document.querySelector(`#row${element.y} #column${element.x}`)
            cell.innerHTML = "X";
            cell.style.color = activeBlock.color;
            cell.style.backgroundColor = activeBlock.color;
        } )
    }
}
function addToStaticBlocks(){
    activeBlock.tiles.forEach(element => {
        staticCords.push(element);
    })
    createNewBlock();
}