Function.prototype.inherits = function(parent) {
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

function Surrogate() {}




function MovingObject() { }

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);

