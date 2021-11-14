export class Snake {

    constructor(screenWidth, screenHeight) {
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;

        this.size = 20;
        this.speed = {x: 20, y: 0};
        this.position = {x: 100, y: 100};

        this.tail = [];
        this.tailLength = 3;

        this.score = 0;
        this.scoreElement = document.getElementById("score");

        this.isDead = false;
    }

    draw(ctx) {
        ctx.fillStyle = "black";
        this.tail.forEach(part => ctx.fillRect(part.x, part.y, this.size, this.size));
    }

    getDistance(xA, yA, xB, yB) {
        let diffX = xA - xB;
        let diffY = yA - yB;
        return Math.sqrt(diffX * diffX + diffY * diffY);
    }

    eat(food) {
        let distance = this.getDistance(this.position.x, this.position.y, food.position.x, food.position.y);
        if (distance < this.size) {
            food.position = food.place(this);
            this.score += this.tailLength * 10;
            this.scoreElement.innerText = `Score: ${this.score}`
            this.tailLength++;
        }
    }

    moveLeft() {
        this.speed.x = -20;
        this.speed.y = 0;
    }

    moveRight() {
        this.speed.x = 20;
        this.speed.y = 0;
    }

    moveUp() {
        this.speed.x = 0;
        this.speed.y = -20;
    }

    moveDown() {
        this.speed.x = 0;
        this.speed.y = 20;
    }

    update(food) {
        if (this.isDead) {
            return;
        }

        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // move snake to opposite side if hit the wall
        if (this.position.x < 0) {
            this.position.x = this.screenWidth - this.size;
        }

        if (this.position.x + this.size > this.screenWidth) {
            this.position.x = 0;
        }

        if (this.position.y < 0) {
            this.position.y = this.screenHeight - this.size;
        }

        if (this.position.y + this.size > this.screenHeight) {
            this.position.y = 0;
        }

        // move head to new position
        let head = {x: this.position.x, y: this.position.y};

        this.tail.forEach(part => {
            if (part.x === head.x && part.y === head.y) {
                this.isDead = true;
            }
        });

        this.tail = [head, ...this.tail];
        while (this.tail.length > this.tailLength) {
            this.tail.pop();
        }

        this.eat(food);
    }
}