(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function(pos, vel, radius) {
    Asteroids.MovingObject.call(this,
              pos,
              vel,
              radius,
              Asteroid.randomColor()
             );
  };

  Asteroid.randomColor = function() {
    var random = Math.random();
    if (random <= 0.5) {
      return "gray";
    } else {
      return "red";
    };
  };

  Asteroid.RADIUS_BOUND = 40;

  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    if ((this.pos[0] - this.radius < 0) ||
        (this.pos[0] + this.radius > Asteroids.Game.DIM_X)) {
      this.vel[0] *= -1;
    };
    if ((this.pos[1] - this.radius < 0) ||
        (this.pos[1] + this.radius > Asteroids.Game.DIM_Y)) {
      this.vel[1] *= -1;
    };
  };

  Asteroid.randomAsteroid = function() {
    var radius = Asteroid.RADIUS_BOUND * (Math.random() + 0.2);

    return new Asteroid(this.randomPos(radius), this.randomVel(), radius);
  };

  Asteroid.randomPos = function(radius) {
    var posX = (Math.random() * (Asteroids.Game.DIM_X - 2 * radius) + radius);
    var posY = (Math.random() * (Asteroids.Game.DIM_Y - 2 * radius) + radius);
    return [posX, posY];
  }

  Asteroid.randomVel = function() {
    var dirX = ((Math.random() * 2) - 1);
    var dirY = ((Math.random() * 2) - 1);
    var speedX = Asteroids.Game.DIM_X / 70 * Math.random();
    var speedY = Asteroids.Game.DIM_Y / 70 * Math.random();

    return [dirX * speedX, dirY * speedY];
  }

})(this);