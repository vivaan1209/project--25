class Bin{
constructor(x,y,width,height){
    var options={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.image=loadImage("dustbin.png")
    
    World.add(world, this.body);

this.width=width
this.height=height
}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
push()
fill("blue")
translate(pos.x,pos.y)
        angleMode(RADIANS);
        rotate(angle);
imageMode(CENTER)


image(this.image,this.body.position.x,this.body.position.y,160,20)
pop()

}

}