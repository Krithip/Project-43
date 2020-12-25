class Item {
    constructor(x, y, r, angle) {
    var options = {
        'restitution': 0.8, 
        'friction': 1.0,
        'density': 1.0,
        isStatic: true
    } 
    this.r = r
    this.body = Bodies.circle(x, y, this.r, options); 
    this.visibility = 255
    this.image = loadImage("Ingredients/Eggs.png")
    World.add(world, this.body);
    }
display() {
    var pos = this.body.position
    var angle = this.body.angle
    /*var d = dist(this.body.position.x, this.body.position.y, x, y)  
    if(d < (this.r)) {
        World.remove(world, this.body)
        push()
        //translate(pos.x, pos.y)
        this.visibiltiy = this.visibility - 5
        //image(this.image, 0, 0, this.r, this.r)
        pop()
    }*/
    //else {

    push();
    translate(pos.x, pos.y)
    rotate(angle)
    //imageMode(CENTER)
    fill("Blue")
    image(this.image, 0, 0, this.r, this.r)
    //ellipse(0, 0, this.r, this.r)
    pop()
//}
}
/*clicked(x, y) {
    var d = dist(this.body.position.x, this.body.position.y, x, y)  
    if(d < (this.r)) {
    return true
}
else {
    return false
}
}*/
remove() {
    World.remove(world, this.body)
    push()
    //World.remove(world, this.body)
    this.visibility = this.visibilty - 5
    pop()
}
}