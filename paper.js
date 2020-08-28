class Paper { 
    constructer(x, y) {
        var options = {
            isStatic: false,
            restitution:0.3,
            friction: 0.5,
            density: 1.2
        }
        
        this.body = Bodies.circle(x,y,70,options)
        this.radius = 70;
        this.image = loadImage("paper.png");
        
        World.add(world, this.body);
    }
    display() {
        var ballPos = this.body.position;
        push();
        translate(ballPos.x, ballPos.y);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius, this.radius);
        pop();

    }
}