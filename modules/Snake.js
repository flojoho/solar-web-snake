import { canvas, bubbleDistance, bubbleRadius } from './globals.js';
import Bubble from './Bubble.js';

class Snake {
  constructor(x, y) {
    this.direction = 'right';
    this.bubbles = [
      new Bubble(x, y),
      new Bubble(x, y),
      new Bubble(x, y)
    ];
    this.path = [];
  }

  draw() {
    this.bubbles.forEach((bubble, index) => {
      if(index === 0) return bubble.draw(true);
      bubble.draw();
    });
  }

  move() {
    const head = this.bubbles[0];
    this.path.push({
      x: head.x,
      y: head.y
    });

    this.bubbles.forEach((bubble, index) => {
      if (index === 0) return;
      const shadowPosition = this.path[this.path.length - (index * bubbleDistance)];
      if(shadowPosition) {
        bubble.x = shadowPosition.x;
        bubble.y = shadowPosition.y;
      }
    });

    head.move(this.direction);
  }

  grow() {
    const lastBubble = this.bubbles[this.bubbles.length - 1];
    this.bubbles.push(new Bubble(lastBubble.x, lastBubble.y));
  }

  checkSelfCollision() {
    const head = this.bubbles[0];
    return this.bubbles.some((bubble, index) => {
      if(index === 0) return false;
      if(this.path.length < index * bubbleDistance) return false;
      if((bubble.x - head.x) ** 2 + (bubble.y - head.y) ** 2 < (2 * bubbleRadius) ** 2) {
        return true;
      }
      return false;
    })
  }

  checkWallCollision() {
    const head = this.bubbles[0];
    if(head.x < bubbleRadius) return true;
    if(head.x > canvas.width - bubbleRadius) return true;
    if(head.y < bubbleRadius) return true;
    if(head.y > canvas.height - bubbleRadius) return true;
    return false;
  }
}

export default Snake;