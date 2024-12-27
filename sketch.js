const particles = [];

function setup() {
  createCanvas(500, 500);
  init()
  
}

function draw() {
  background(0);
  for (let i = 0; i < particles.length; i++) {
    particles[i].tick();
  }
}

function init() {
  setTimeout(init, 5000)
  for (let i = 0; i < 100; i++) {
    particles[i] = new Particle();
    colorMode(HSB)
  }
}