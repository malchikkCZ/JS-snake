export class InputHandler {

    constructor(snake) {
        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowLeft":
                case "a":
                    if (snake.speed.x === 0) {
                        snake.moveLeft();
                    }
                    break;
                case "ArrowRight":
                case "d":
                    if (snake.speed.x === 0) {
                        snake.moveRight();
                    }
                    break;
                case "ArrowUp":
                case "w":
                    if (snake.speed.y === 0) {
                        snake.moveUp();
                    }
                    break;
                case "ArrowDown":
                case "s":
                    if (snake.speed.y === 0) {
                        snake.moveDown();
                    }
                    break;
            }
        });
    }
}