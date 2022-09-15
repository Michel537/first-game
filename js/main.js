class Game {
    constructor(){
        this.player = null;

    }

    start(){       
        this.player = new Player();
        this.attachEventListeners();
        
    }

    attachEventListeners(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft"){
                console.log("move player to the left")
                this.player.moveLeft();
            }else if(event.key === "ArrowRight"){
                console.log("move player to the right")
                this.player.moveRight();
            }
        });
    }
}

class Player{
    constructor(){
        this.positionX = 50;
        this.positionY = 0;
        this.width = 10;
        this.height = 10;

        this.domElm = this.createDomElemnt();
    }
    createDomElemnt(){

        let player = document.createElement("div");
        

        player.id = "player";
        player.style.width = this.width + "vw";
        player.style.height = this.height + "vh";

        player.style.bottom = this.positionY + "vh";
        player.style.left = this.positionX + "vw";

        const boardElm = document.getElementById("board");
        boardElm.appendChild(player);
        return player;

    }
    moveLeft(){
        console.log("moving left");
        this.positionX -= this.width;
        this.domElm.style.left = this.positionX + "vw";
        console.log(this.positionX);
    }
    moveRight(){
        console.log("moving right");
        this.positionX += this.width;
        this.domElm.style.left = this.positionX + "vw";
        console.log(this.positionX);
    }
    
}

const game = new Game();
game.start();