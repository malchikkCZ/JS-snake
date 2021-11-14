export class Food {

    constructor(screenWidth, screenHeight, snake) {
        this.size = 20;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.position = this.place(snake);
    }

    place(snake) {

        let x = Math.ceil(Math.random() * (this.screenWidth - this.size) / 20) * 20;
        let y = Math.ceil(Math.random() * (this.screenHeight - this.size) / 20) * 20;

        let new_position = {x: x, y: y};
        snake.tail.forEach(part => {
            if (part.x === x && part.y === y) {
                new_position = this.place(snake);
            }
        });
        
        return new_position;
    }

    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(this.position.x + 4, this.position.y + 4, this.size - 8, this.size - 8);
    }
}