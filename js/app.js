let level = 1 //initial level of the game
let allEnemies = [];



// Enemies our player must avoid
class Enemy {
  constructor() {
    this.speed = Math.floor(Math.random() * 10) + 3; // randomize speed between slow (3) and fast (13)
    this.y = Math.floor(Math.random() * 3) + 1; // randomize y location between 1, 2 and 3
    this.x = 0;
    this.sprite = 'images/enemy-bug.png';     // The image/sprite for our enemies
  }

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
  update(dt) {
    this.x = this.x + (this.speed*dt*level); // Updates the Enemy location
    // still need to render!
    if (this.location = player.location) { // Handles collision with the Player
      player.location = startingPoint;
    }
  }

// Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}


class Player {
  constructor() {
    this.column = 3; // set x-location at start
    this.row = 1; // set y-location at start
    this.sprite = 'images/char-cat-girl.png';
  }

  update(column, row) {
    this.column = column;
    this.row = row;
    this.render();
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.column * 101, this.row * 83);

  }


  handleInput(move) {
    switch(move) {
      case 'up':
        if (this.row < 5) {
          this.row += 1;
        }
        break;
      case 'down':
        if (this.row > 0) {
          this.row -= 1;
        }
        break;
      case 'left':
        if (this.column > 0) {
          this.column -= 1;
        }
        break;
      case 'right':
        if (this.column < 4) {
          this.column += 1;
        }
        break;
    }
    this.update(this.column, this.row);
  }
}

// instantiate objects
function makeEnemies() { // Instantiate enemy objects and place them in an array
  let i;
  allEnemies = [];
  for (i = 0; i < 10; i++) {
    let enemy = new Enemy;
    allEnemies.push(enemy);
  }
}


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

let player = new Player(); // Place the player object in a variable called player
player.render();

function startGame() {
  let player = new Player(); // Place the player object in a variable called player
  player.render();
}
