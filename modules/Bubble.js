import { bubbleRadius, bubbleDistance, fps, snakeSpeed } from './globals.js';
import { ctx }  from './globals.js';

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, bubbleRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
  }

  move(direction) {
    switch(direction) {
      case 'up':
        this.y -= snakeSpeed;
        break;
      case 'right':
        this.x += snakeSpeed;
        break;
      case 'down':
        this.y += snakeSpeed;
        break;
      case 'left':
        this.x -= snakeSpeed;
        break;
    }
  }
}

export default Bubble;