class Tree{
    constructor(x,y){
        var options = {
            'restitution':0.01,
            'friction': 1,
            'density': 3
        }
        this.body = Bodies.rectangle(x,y,100,500,options);
        this.width = 350;
        this.height = 650;
        this.img = loadImage("tree.png");
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.img,0,0,this.width,this.height);
        pop();
    }
}