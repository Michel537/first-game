class Game {
  constructor() {
    this.player = null; //will store an instance of the class Player
    this.obstacles = []; //will store instances of the class Obstacle
    
  }
  start() {
    this.player = new Player();
    this.attachEventListeners();

    //create new obstacles
    
    setInterval(() => {          
      const newObstacle = new Obstacle();
      this.obstacles.push(newObstacle);
    }, 1000);

    //move obstacles
    
    setInterval(() => {          

      this.obstacles.forEach((obstacleInstance) => {
        //move
        obstacleInstance.moveDown();

        //detect collision
        this.detectCollision(obstacleInstance);

        //remove obstacle 
        this.removeObstacle(obstacleInstance);
      });
      
    }, 60);
  }

  attachEventListeners() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        this.player.moveLeft();
      } else if (event.key === "ArrowRight") {
        this.player.moveRight();
      }
    });
  }
  
  detectCollision(obstacleInstance) {
    if (
      this.player.positionX <
        obstacleInstance.positionX + obstacleInstance.width &&
      this.player.positionX + this.player.width > obstacleInstance.positionX &&
      this.player.positionY <
        obstacleInstance.positionY + obstacleInstance.height &&
      this.player.height + this.player.positionY > obstacleInstance.positionY
    ) {
      console.log("game over....");
      location.href = "gameover.html";
    }
  }

  removeObstacle(obstacleInstance) {
    if (obstacleInstance.positionY < 0) {
      obstacleInstance.domElement.remove();
      this.obstacles.shift();
    }
  }
}

class Player {
  constructor() {
    this.positionX = 50;
    this.positionY = 0;
    this.width = 10;
    this.height = 10;
    this.domElement = null;

    this.createDomElement();
  }
  createDomElement() {
    // create dom element
    this.domElement = document.createElement("div");

    // set id and css
    this.domElement.id = "player";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.bottom = this.positionY + "vh";
    this.domElement.style.left = this.positionX + "vw";

    // append to the dom
    const boardElm = document.getElementById("board");
    boardElm.appendChild(this.domElement);
  }
  moveLeft() {
    this.positionX -= this.width;
    this.domElement.style.left = this.positionX + "vw";
  }
  moveRight() {
    this.positionX += this.width;
    this.domElement.style.left = this.positionX + "vw";
  }
}

class Obstacle {
  constructor() {
    this.positionX = Math.floor(Math.random() * 95);
    this.positionY = 100;
    this.width = 5;
    this.height = 5;
    this.domElement = this.createDomElement();
  }
  createDomElement() {
    // create dom element
    const domElementT = document.createElement("div");

    // set id and css
    domElementT.className = "obstacle";
    domElementT.style.width = this.width + "vw";
    domElementT.style.height = this.height + "vh";
    domElementT.style.bottom = this.positionY + "vh";
    domElementT.style.left = this.positionX + "vw";

    // append to the dom
    const boardElm = document.getElementById("board");
    boardElm.appendChild(domElementT);

    return domElementT;
  }
  deleteDomeElement(domElement) {
    console, log("Element to remove... " + this.domElement);
    this.domElement.re;
  }
  moveDown() {
    this.positionY--;
    this.domElement.style.bottom = this.positionY + "vh";
  }
}

const game = new Game();
game.start();
