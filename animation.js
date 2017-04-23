window.onload = function() {

 var canvas = document.createElement("canvas"),
   c = canvas.getContext('2d'),
   particles = {},
   particleIndex = 0,
   particleNum = 5;

   canvas.height = 1000;
   canvas.width = 1000;

  document.body.appendChild(canvas);

   c.fillStyle = "black";
   c.fillRect(0, 0, canvas.width, canvas.height);

   function Particle() {
     this.y = canvas.height / 2;
     this.x = canvas.width / 2;
     this.vx = Math.random() * 10 - 5;
     this.vy = Math.random() * 10 - 5;
     this.gravity = 5;
     particleIndex++;
     particles[particleIndex] = this;
     this.id = particleIndex;
     this.life = 0;
     this.maxLife = 100;
   }
   Particle.prototype.draw = function() {
     this.x += this.vx;
     this.y = this.vy;
     this.life++;
     if(this.life == this.maxLife) {
       delete particles[this.id];
     }

     c.fillStyle = 'white';
     c.fillRect(this.x, this.y, 10, 10);
   };
   var p = new Particle();

 setInterval(function() {
   c.fillStyle = "black";
   c.fillRect(0, 0, canvas.width, canvas.height);
  p.draw();
  for (var i = 0; i < 10; i++) {
     new Particle();
   }
   for (var i in particles) {
     particles[i].draw();
   }
 }, 30);

};
