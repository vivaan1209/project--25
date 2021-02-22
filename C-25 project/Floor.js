class Floor{
    constructor(x, y,width, height){
        var still={
            isStatic:true
        }
        this.body=Bodies.rectangle(x, y, width,  height, still)
        World.add(world, this.body);
    }
    display(){
        push()
        
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,1600,20);
        pop()
    }
}