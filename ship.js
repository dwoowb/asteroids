(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function() {
    Asteroids.MovingObject.call(this,
              [Asteroids.Game.DIM_X / 2, Asteroids.Game.DIM_X / 2],
              [0, 0],
              Ship.RADIUS,
              Ship.COLOR
             );
  };

  Ship.inherits(Asteroids.MovingObject);

  Ship.RADIUS = 15;
  Ship.COLOR = "yellow";

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  Ship.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    if (this.pos[0] > Asteroids.Game.DIM_X) {
      this.pos[0] = 0;
    } else if (this.pos[0] < 0) {
      this.pos[0] = Asteroids.Game.DIM_X;
    };

    if (this.pos[1] > Asteroids.Game.DIM_Y) {
      this.pos[1] = 0;
    } else if (this.pos[1] < 0) {
      this.pos[1] = Asteroids.Game.DIM_Y;
    };
  };

  Ship.prototype.speed = function() {
    return Math.sqrt(Math.pow(this.vel[0], 2) + Math.pow(this.vel[1], 2));
  }

  Ship.prototype.normalizedVel = function() {
    var dx = this.vel[0] / this.speed();
    var dy = this.vel[1] / this.speed();
    return [dx, dy];
  };

  Ship.prototype.fireBullet = function() {
    var ship = this;
    if (ship.speed() > 0) {
      return new Asteroids.Bullet(ship.pos, ship.normalizedVel());
    };
  };

})(this);