import Snake from './Snake.js';
import Food from './Food.js';
import { ctx, canvas, fps, bubbleRadius } from './globals.js';
import { updateScore, resetScore } from './scores.js';

let snake;
const food = new Food();

const reset = () => {
  resetScore();
  snake = new Snake(200, 200);
  updateScore(snake.bubbles.length);
}
reset();

setInterval(() => {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = 'gray';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.stroke();

  if(snake.checkSelfCollision() || snake.checkWallCollision()) {
    reset();
  }

  const snakeHead = snake.bubbles[0];
  if((food.x - snakeHead.x) ** 2 + (food.y - snakeHead.y) ** 2 < (2 * bubbleRadius) ** 2) {
    snake.grow();
    updateScore(snake.bubbles.length);
    food.changePosition();
  }

  snake.move();

  food.draw();
  snake.draw();

}, 1000/fps);

document.addEventListener('keydown', e => {
  switch (e.key) {
    case "ArrowUp":
      snake.direction = "up";
      break;
    case "ArrowRight":
      snake.direction = "right";
      break;
    case "ArrowDown":
      snake.direction = "down";
      break;
    case "ArrowLeft":
      snake.direction = "left";
      break;
  }
});