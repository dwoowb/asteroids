(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(pos, normalShipVel) {
    Asteroids.MovingObject.call(this,
      pos.slice(),
      Bullet.velocity(normalShipVel.slice()),
      Bullet.RADIUS,
      Bullet.COLOR)
  };

  Bullet.RADIUS = 5;
  Bullet.COLOR = "brown";
  Bullet.SPEED = 20;

  Bullet.inherits(Asteroids.MovingObject);

  Bullet.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  };

  Bullet.prototype.hitAsteroids = function(asteroids) {
    for (var i = 0; i < asteroids.length; i++) {
      if (asteroids[i].isCollidedWith(this)) return i;
    };
  };

  Bullet.velocity = function(vel) {
    vel[0] *= Bullet.SPEED;
    vel[1] *= Bullet.SPEED;
    return vel;
  };

})(this);