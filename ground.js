class Ground {
    constructor(x, y) {
        var options = {
            isStatic: true,
            restitution:0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.rectangle(x, y ,800, 20, options);
        this.width = 800;
        this.height = 20;

        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill(255);
        strokeWeight(4);
        stroke("red");
        rect(pos.x, pos.y, this.width, this.height);
        pop();

    }
}