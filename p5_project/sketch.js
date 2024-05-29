// Time variable for Perlin noise
let t = 0; 
// Time variable for background noise
let noiseOffset = 0;

// Array to store circles created on mouse click
let circles = [];

// Draw the background rectangle with a different color
function setup() {
  createCanvas(600, 800);
  background(148, 177, 169);
}

// set background colour
function draw() {
  background(148, 177, 169); 
  drawBackgroundRect(50, 50, width - 100, height - 100, color(49, 74, 85));

  let newBlue = '#41EAD4';
  let newYellow  = '#FBFF12';
  let newGreen = '#007f5f'; 
  
  // Draw a circle divided up and down
  function drawSplitCircle(x, y, diameter, fillColor1 = newBlue, fillColor2 = newYellow) {
    fill(fillColor1);
    arc(x, y, diameter, diameter, PI, 0);
    fill(fillColor2);
    arc(x, y, diameter, diameter, 0, PI);
    noFill();
    ellipse(x, y, diameter, diameter);
  }

  // Draw a circle divided right and left
  function drawSplitCircleLR(x, y, diameter, fillColor1 = newBlue, fillColor2 = newYellow) {
    fill(fillColor1);
    arc(x, y, diameter, diameter, HALF_PI, HALF_PI + PI);
    fill(fillColor2);
    arc(x, y, diameter, diameter, HALF_PI + PI, HALF_PI);
    noFill();
    ellipse(x, y, diameter, diameter);
  }

  // Draw a circle divided by red and green
  function drawSplitCircleTopRed(x, y, diameter, fillColor1 = newYellow, fillColor2 = newBlue) {
    fill(fillColor1);
    arc(x, y, diameter, diameter, PI, 0);
    fill(fillColor2);
    arc(x, y, diameter, diameter, 0, PI);
    noFill();
    ellipse(x, y, diameter, diameter);
  }

  // Central position
  let centerX = width / 2;
  let centerY = 400;

  // List of diameters of circles
  let diameters = [80, 50, 30, 60];

  // noise
  let noiseX = noise(t) * 100 - 50;
  let noiseY = noise(t + 1000) * 100 - 50;

  // Central circle
  drawSplitCircle(centerX + noiseX, centerY + noiseY, diameters[0]);

  // Left arm circle
  drawSplitCircle(centerX - 0.82 * diameters[0] + noiseX, centerY + noiseY, diameters[1]);
  drawSplitCircle(centerX - 0.7 * diameters[0] - diameters[1] + noiseX, centerY + noiseY, diameters[2]);
  drawSplitCircleLR(centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2 + noiseX, centerY - 2 * diameters[2] / 2 + noiseY, diameters[3]);

  // Right arm circle
  drawSplitCircle(centerX + 0.88 * diameters[0] + noiseX, centerY + noiseY, diameters[3]);
  drawSplitCircle(centerX + 1.26 * diameters[0] + diameters[2] + noiseX, centerY + noiseY, diameters[3]);

  drawLine(centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2 + noiseX, centerY + noiseY, centerX + 1.26 * diameters[0] + diameters[2] + diameters[3] / 2 + noiseX, centerY + noiseY);
  drawLine(centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2 + noiseX, centerY - 2 * diameters[2] / 2 + diameters[3] / 2 + noiseY, centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2 + noiseX, centerY - 2 * diameters[2] / 2 - diameters[3] / 2 + noiseY);

  diameters = [60, 50, 80, 30];

  // The bottom rectangle remains unchanged
  drawBottomRectangles(centerX, centerY + 1.11 * diameters[1] + diameters[2] + diameters[3], 300, 50, newGreen);

  fill(55, 63, 71);
  noStroke();
  rect(centerX - 105, centerY + 1.7 * diameters[1] + diameters[2] + diameters[3], 50, 60);

  fill(111, 94, 83);
  noStroke();
  ellipse(centerX - 80, centerY + 2.3 * diameters[1] + diameters[2] + diameters[3], 50);

  fill(55, 63, 71);
  rect(centerX + 55, centerY + 1.7 * diameters[1] + diameters[2] + diameters[3], 50, 60);

  fill(111, 94, 83);
  ellipse(centerX + 80, centerY + 2.3 * diameters[1] + diameters[2] + diameters[3], 60, 60);

  // Upper median radius
  drawSplitCircleLR(centerX + noiseX, centerY - 0.92 * diameters[0] + noiseY, diameters[3]);
  drawSplitCircleLR(centerX + noiseX, centerY - 1.68 * diameters[0] + noiseY, diameters[0]);

  // Lower median radius
  drawSplitCircleLR(centerX + noiseX, centerY + 1.3 * diameters[1] + noiseY, diameters[1]);
  drawSplitCircleLR(centerX + noiseX, centerY + diameters[1] + diameters[2] + noiseY, diameters[2]);
  drawSplitCircleLR(centerX + noiseX, centerY + 1.71 * diameters[1] + diameters[2] + diameters[3] + noiseY, diameters[1]);
  drawLine(centerX + noiseX, centerY + 1.71 * diameters[1] + diameters[2] + diameters[3] + diameters[1] / 2 + noiseY, centerX + noiseX, centerY - 1.68 * diameters[0] - diameters[0] / 2 + noiseY);

  // Draw more middle bottom square, using red on top and green on bottom
  drawSplitCircleTopRed(centerX + 0.8 * diameters[1] + noiseX, centerY + 1.71 * diameters[1] + diameters[2] + diameters[3] + noiseY, diameters[3]);
  drawSplitCircleTopRed(centerX + 1.7 * diameters[1] + noiseX, centerY + 1.71 * diameters[1] + diameters[2] + diameters[3] + noiseY, diameters[0]);
  drawSplitCircleTopRed(centerX - 0.8 * diameters[1] + noiseX, centerY + 1.71 * diameters[1] + diameters[2] + diameters[3] + noiseY, diameters[3]);
  drawSplitCircleTopRed(centerX - 1.6 * diameters[1] + noiseX, centerY + 1.71 * diameters[1] + diameters[2] + diameters[3] + noiseY, diameters[1]);
  drawLine(centerX - 1.6 * diameters[1] - diameters[1] / 2 + noiseX, centerY + 1.71 * diameters[1] + diameters[2] + noiseY, centerX + 1.7 * diameters[1] + diameters[0] / 2 + noiseX, centerY + 1.71 * diameters[1] + diameters[2] + noiseY);

  // List of diameters of circles
  diameters = [30, 50, 80, 60];

  // Right side vertical circle
  drawSplitCircleLR(centerX + 1.26 * diameters[2] + diameters[0] + diameters[3] / 2 + noiseX, centerY - 1.8 * diameters[0] + diameters[2] * 0.1 + noiseY, diameters[1]);
  drawSplitCircleLR(centerX + 1.26 * diameters[2] + diameters[0] + diameters[3] / 2 + noiseX, centerY - 1.48 * diameters[0] - diameters[1] + diameters[2] * 0.1 + noiseY, diameters[0]);
  drawSplitCircleLR(centerX + 1.26 * diameters[2] + diameters[0] + diameters[3] / 2 + noiseX, centerY - 0.65 * diameters[0] - diameters[1] - diameters[2] + diameters[2] * 0.1 + noiseY, diameters[2]);
  drawLine(centerX + 1.26 * diameters[2] + diameters[0] + diameters[3] / 2 + noiseX, centerY + noiseY, centerX + 1.26 * diameters[2] + diameters[0] + diameters[3] / 2 + noiseX, centerY - 0.65 * diameters[0] - diameters[1] - diameters[2] + diameters[2] * 0.1 - diameters[2] / 2 + noiseY);

  // Background noise
  for (let i = 0; i < 30000; i++) {
    stroke(0, 187, 249, 50);
    point(random(width) + noise(t + i) * 10 - 5, random(height) + noise(t + i + 10000) * 10 - 5);
  }

  // Update and draw the interactive circles
  for (let circle of circles) {
    circle.x += noise(circle.noiseOffsetX) * 2 - 1;
    circle.y += noise(circle.noiseOffsetY) * 2 - 1;
    drawSplitCircle(circle.x, circle.y, circle.diameter, circle.color1, circle.color2);
    circle.noiseOffsetX += 0.01;
    circle.noiseOffsetY += 0.01;
  }

  t += 0.01;
  noiseOffset += 0.005;
}

function drawBackgroundRect(x, y, width, height, color) {
  fill(color);
  rect(x, y, width, height);
}

function drawBottomRectangles(centerX, y, rectWidth, rectHeight, rectColor) {
  let totalWidth = rectWidth * 3;
  let startX = centerX - totalWidth / 2;

  fill(rectColor);
  noStroke();
  rect(startX + 50, y + 40, (rectWidth * 3) - 100, rectHeight + 10);

  fill(111, 94, 83);
  rect(startX + rectWidth, y + 30, rectWidth, rectHeight + 10);
}

function drawLine(x, y, x1, y1) {
  push();
  stroke(254, 252, 251);
  strokeWeight(3);
  line(x, y, x1, y1);
  pop();
}

function mousePressed() {
  let newCircle = {
    x: mouseX,
    y: mouseY,
    diameter: random(20, 80),
    noiseOffsetX: random(1000),
    noiseOffsetY: random(1500),
    color1: color(random(0, 3), random(4, 100), 228, 50),
    color2: color(random(0, 3), random(4, 100), 228, 50)
  };
  circles.push(newCircle);
  
}