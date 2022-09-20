import { ctx, canvas, bubbleRadius, wallDisplacement }  from './globals.js';

class Food {
  constructor() {
    this.x = 350;
    this.y = 350;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, bubbleRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'blue';
    ctx.fill();
  }

  changePosition() {
    this.x = wallDisplacement + bubbleRadius + (canvas.width - 2 * (wallDisplacement + bubbleRadius)) * Math.random();
    this.y = wallDisplacement + bubbleRadius + (canvas.height - 2 * (wallDisplacement + bubbleRadius)) * Math.random();
  }
}

export default Food;