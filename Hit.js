class Hit{
    constructor(bodyA, pointB){
        var options ={

            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.004,
            length :1
        }
       this.bodyA= bodyA;
        this.pointB= pointB;
        this.hit= Constraint.create(options);
        World.add(world,this.hit);
    }

    fly(){
        this.hit.bodyA= null;
    }

    attach(body){
        this.hit.bodyA=body;
    }

    display(){
        if(this.hit.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}