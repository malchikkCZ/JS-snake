import { Food } from "/js/food.js";
import { InputHandler } from "/js/input.js";
import { Snake } from "/js/snake.js";

const canvas = document.getElementById("gameScreen");
const GAME_WIDTH = canvas.getAttribute("width");
const GAME_HEIGHT = canvas.getAttribute("height");
let ctx = canvas.getContext("2d");

let snake = new Snake(GAME_WIDTH, GAME_HEIGHT);
let food = new Food(GAME_WIDTH, GAME_HEIGHT, snake);

new InputHandler(snake);

function gameLoop() {

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    if (snake.isDead) {
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.font = "bold 30px monospace";
        ctx.fillText("GAME OVER", GAME_WIDTH / 2, GAME_HEIGHT / 2 - 25);
        ctx.font = "20px monospace";
        ctx.fillText("press F5 to restart", GAME_WIDTH / 2, GAME_HEIGHT / 2);
        return;
    }

    food.draw(ctx); 
    snake.update(food);
    snake.draw(ctx);

    setTimeout(gameLoop, 150 - snake.tailLength);
}

gameLoop();