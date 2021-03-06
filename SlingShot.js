class SlingShot{
    constructor(bodyA,pointB){
        var sling_options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:50
        }
        this.pointB = pointB;
        this.sling = Constraint.create(sling_options);
        World.add(world,this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}