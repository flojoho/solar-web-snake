import { ctx, canvas, bubbleRadius }  from './globals.js';

class Food {
  constructor() {
    this.x = 350;
    this.y = 350;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, bubbleRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#ffb400';
    ctx.fill();
  }

  changePosition() {
    this.x = bubbleRadius + (canvas.width - 2 * bubbleRadius) * Math.random();
    this.y = bubbleRadius + (canvas.height - 2 * bubbleRadius) * Math.random();
  }
}

export default Food;