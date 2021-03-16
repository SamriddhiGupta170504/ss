class paper{
    constructor(x,y,r){
        var options={
            restitution:1,
            isStatic:false
        }
        this.x=x;
        this.y=y;
        this.r=r;
       // this.image=loadImage("paper.png")
        this.body=Bodies.circle(this.x,this.y,this.r,options);

        World.add(world,this.body)

    }

    display(){
        var paperpos=this.body.position;
        push();
        translate(paperpos.x,paperpos.y)
        //ellipseMode(RADIUS)
       // ellipse(0,0,this.r)
       fill("black")
       ellipseMode(CENTER)
       ellipse(0,0,this.r)
        pop();
    }
}
