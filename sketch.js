
function setup() {
  createCanvas(800, 800);
  background(255);
  noLoop();
}

function draw() {
  background(255);

  let tileSize = 80;

  for (let x = 0; x < width; x += tileSize) {
    for (let y = 0; y < height; y += tileSize) {

      push();
      translate(x, y);

      // Randomly rotate each tile
      rotate(floor(random(4)) * HALF_PI);

      // Yellow tile background
      noStroke();
      fill(255, 210, 0);
      rect(0, 0, tileSize, tileSize);

      // Black curved Truchet pattern
      noFill();
      stroke(0);
      strokeWeight(3);

      arc(0, 0, tileSize * 2, tileSize * 2, 0, HALF_PI);
      arc(tileSize, tileSize, tileSize * 2, tileSize * 2, PI, PI + HALF_PI);

      pop();
    }
  }
}

