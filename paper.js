class paper {
    constructor(x,y,r){
    var options = {
isStatic:false,
restitution:0.3,
friction:0,
denisity:1.2
    }
this.image = loadImage("sprites/bird.png");
    

        this.x=x;
		this.y=y;
	    this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
	    World.add(world, this.body);
        
}
display(){
var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//stroke("black");
			fill("255,0,255")
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			//draw the ellipse here to display the paper
		//ellipse(0,0,this.r,this.r);
			pop()

			
}  
}