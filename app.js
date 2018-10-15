let game = true;

var Enemy = function(x, y) {
    this.x = x;
    this.y =y;
    this.sprite = 'images/enemy-bug.png';
    this.height = 65;
    this.width = 95;
    this.collision = false;
};


Enemy.prototype.update = function(dt) {
    this.x += 175 * dt;

    if (this.x > ctx.canvas.width + this.width){
        this.x = -200 * Math.floor(Math.random() * 3) + 2;
    }else {
        this.x += 150 * dt;
    }

  if (player.x < this.x + this.width &&
       player.x + player.width > this.x &&
        player.y < this.y + this.height &&
        player.y + player.height > this.y){
    player.collision = true;
  }

};


Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var Player = function(x,y, sprite){
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.height = 75;
    this.width =65;
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}


Player.prototype.update = function(dt) {
    if (this.collision) {
    player.x = 202;
    player.y = 400;
    this.collision = false;
  }
   if ( game && player.y < 40) {
    game = false;
    winner();
   }


    };

    Player.prototype.handleInput = function(direction){
           const horizontal = 101,
           vertical = 83;


        if ( direction === 'left' && this.x - horizontal >= 0){
            this.x -= horizontal;
        } else if (direction === 'right'  && this.x + horizontal < ctx.canvas.width){
            this.x  += horizontal;
        } else if  (direction === 'down'  && this.y + vertical < ctx.canvas.height - 200){
            this.y += vertical;
        } else if (direction === 'up'  && this.y - vertical > 0 - player.height) {
            this.y -= vertical;
        }
    }


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };


    player.handleInput(allowedKeys[e.keyCode]);
});


const enemyPosition = [55, 140, 230];

const player = new Player(202, 400, 'images/char-boy.png');

const allEnemies = enemyPosition.map((y, index) => {
    return new Enemy((-100 *(index +1)), y);
});

 function winner () {
    alert ('winner!!!');
    console.log ('winner!!');
 }


 function reset (){

 }
