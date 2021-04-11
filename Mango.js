class Mango{
    constructor(x,y){
        var options = {
            'isStatic':true,
            'restitution':0,
            'friction':1
        }

        this.mango = Bodies.circle(x,y,65,options);
        this.radius = 65;
        this.img = loadImage("mango.png");

        World.add(world,this.mango);
    }

    display(){
        var pos = this.mango.position;
        var angle = this.mango.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.img,0,0,this.radius,this.radius);
        pop();
    }
}