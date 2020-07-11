class Box2{
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.1

        }
        this.body=Bodies.rectangle(x, y, width, height, options);
        this.width=width;
        this.height=height;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("black");
        fill(0, 255, 46);
        rect(0,0,this.width,this.height);
        pop();
    }
};