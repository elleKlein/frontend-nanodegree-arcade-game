// Game over reset player to start position
Object.prototype.reset = function () {
    player.x = 200;
    player.y = 400;
};

// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    this.sprite = "images/enemy-bug.png";
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed * dt;
        if (this.x > 600) {
            this.x = 0;
        }
        if (player.x >= this.x - 80 && player.x <= this.x + 80) {
            if (player.y >= this.y - 60 && player.y <= this.y + 60) {
                this.reset();
        }
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var enemy = new Enemy();

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y) {
    this.sprite = "images/char-horn-girl.png";
    this.x = x;
    this.y = y;
};

Player.prototype.update = function() {
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player movement
Player.prototype.handleInput = function(key) {
    if (key === "left" && this.x > 0) {
        this.x = this.x - 100;
    }
    if (key === "right" && this.x < 400) {
        this.x = this.x + 100;
    }
    if (key === "up" && this.y > 0) {
        this.y = this.y - 82;
    }
    if (key === "down" && this.y < 400) {
        this.y = this.y + 82;
    }
    if (this.y < 1) {
        this.reset();
    }
};

var player = new Player(200,400);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies=[
    new Enemy(0, 55, 150),
    new Enemy(0, 140, 250),
    new Enemy(0, 225, 100)
];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
