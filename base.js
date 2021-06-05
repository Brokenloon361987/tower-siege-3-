class Box extends BaseClass {
  constructor(x, y){
    super(x,y,30,20);
  //  this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

 display(){
   ///console.log(this.body.speed);
   if(this.body.speed < 4){
    var angle = this.body.angle;
    this.Visiblity = 255;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }
ScoreUpdates(){
 if(this.Visiblity<0 && this.Visiblity>-1005){
   score = score + 1;
 }

}

};