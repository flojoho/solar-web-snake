import { bubbleRadius, snakeSpeed } from './globals.js';
import { ctx }  from './globals.js';

const icon = new Image();
icon.src = '../img/fronius_favicon.svg';

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(isHead) {
    if(isHead) {
      ctx.drawImage(icon, this.x - bubbleRadius, this.y - bubbleRadius, 2 * bubbleRadius, 2 * bubbleRadius);
    } else {
      ctx.beginPath();
      ctx.arc(this.x, this.y, bubbleRadius, 0, 2 * Math.PI, false);
      ctx.fillStyle = '#ffb400';
      ctx.fill();
    }
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