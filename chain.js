class Chain {
    constructor(bodyA, pointX, pointY) {

        this.bodyA = bodyA;
        this.pointX = pointX;
        this.pointY = pointY;
        var options = {
            bodyA: bodyA,
            //bodyB: bodyB,

            pointB: { x: pointX, y: pointY },
            elasticity: 5,
            stiffness: 0.004,

            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display() {

        if (this.chain.bodyA) {

            strokeWeight(4);
            var pointA = this.chain.bodyA.position;
            //var pointB = this.chain.bodyB.position;
            //var offset = this.chain.pointB
            //line(pointA.x, pointA.y, this.chain.offsetX, this.chain.offsetY);
            line(pointA.x, pointA.y, this.pointX, this.pointY);

        }
    }

    fly() {
        
        
        this.chain.bodyA = null;
        
    }
    throw(){

        this.chain.bodyA = this.bodyA;

    }
}