class Particle {
    constructor() {
        this.x = random(220, 280);
        this.y = random(400, 500);

        this.dx = random(-2, 2);
        this.dy = random(-10, -12);

        this.diameter = random(3, 5);
        this.color = color(random(360), 100, 100);

        
        strokeWeight(0);
    }
    tick() {
        this.update()
        this.draw()
    }
    update() {
        this.x += this.dx;
        this.y += this.dy;
        this.dy += 0.2
    }
    draw() {
        fill(this.color);
        circle(this.x, this.y, this.diameter);
    }
}