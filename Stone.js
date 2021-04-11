class Stone{
    constructor(x,y,radius){
        var options = {
            'restitution':1,
            'friction':1,
            'density':1.2,
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
        this.img = loadImage("stone.png");

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        //var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.img,0,0,this.radius,this.radius);
        pop();
    }
}