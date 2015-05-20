//Get Element
var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d'),
		window_width = window.innerWidth,
		window_height = window.innerHeight;

//Set width && height
canvas.width = window_width;
canvas.height = window_height;

var rnd = {
	randomInt: function(min, max) {
		return Math.random() * (max - min + 1) + min;
	}
};

// Particles array
var particles = [];

var Particle = {
	x: window_width,
	y: window_height,
	x_speed: 10,
	y_speed: 10,
	radius: 10,

	draw: function() {
		var gradient;
		
		ctx.beginPath();
		
		//Set the color of the particles. Follow same style you can add or remove colors
		gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
		gradient.addColorStop(0, 'red');
		gradient.addColorStop(0.8, '#444');
		gradient.addColorStop(1, this.color);
		
		ctx.fillStyle = gradient;

		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);

		ctx.closePath();

		ctx.fill();
		
	},
};

function createParticle() {
	
	var particle = Object.create(Particle);
	

	particle.x = Math.random()*window_width;
	particle.y = Math.random()*window_height;
	

	particle.x_speed = rnd.randomInt(-3, 3);
	particle.y_speed = rnd.randomInt(-3, 3);
	
	particle.color = "#111";
	

	particles.push(particle);	

	particle.draw();
}


createParticle();

/*
If you want to create multiple particles with an interval, just use the code below

//Create one particle per second
setInterval(function() {
	createParticle();
}, 1);

*/