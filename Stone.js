class Stone{
    constructor(x,y,r){
        var options ={
            isStatic: false,
            restitution :0,
            friction : 0.5,
            density: 0.1
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.image=loadImage("sprites/stone.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        
       
        World.add(world,this.body);
    }

    display(){
       var pos = this.body.position;
        //var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
       // rotate(angle);
       ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
}
}