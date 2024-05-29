function setup() {
  createCanvas(600, 800);
  background(148, 177, 169); 

  // Draw the background rectangle with a different color
  drawBackgroundRect(50, 50, width - 100, height - 100, color(49, 74, 85));

  // Green & Red
  let green = '#6F8F6A';
  let red = '#C15B5C';
  let yellow = '#F8E8B6';

  // Draw a circle divided up and down
  function drawSplitCircle(x, y, diameter) {
    fill(green);
    arc(x, y, diameter, diameter, PI, 0);
    fill(red);
    arc(x, y, diameter, diameter, 0, PI);
    noFill();
    ellipse(x, y, diameter, diameter);
  }
  
  // Draw a circle divided right and left
  function drawSplitCircleLR(x, y, diameter) {
    fill(green);
    arc(x, y, diameter, diameter, HALF_PI, HALF_PI + PI);
    fill(red);
    arc(x, y, diameter, diameter, HALF_PI + PI, HALF_PI);
    noFill();
    ellipse(x, y, diameter, diameter);
  }

  // Draw a circle divided by red and green
  function drawSplitCircleTopRed(x, y, diameter) {
    fill(red);
    arc(x, y, diameter, diameter, PI, 0);
    fill(green);
    arc(x, y, diameter, diameter, 0, PI);
    noFill();
    ellipse(x, y, diameter, diameter);
  }

  // Central position
  let centerX = width / 2;
  let centerY = 400;

  // List of diameters of circles
  let diameters = [80, 50, 30, 60];

  // Central circle
  drawSplitCircle(centerX, centerY, diameters[0]);

  // Left arm circle
  drawSplitCircle(centerX - 0.82 * diameters[0], centerY, diameters[1]);
  drawSplitCircle(centerX - 0.7 * diameters[0] - diameters[1], centerY, diameters[2]);
  drawSplitCircleLR(centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2, centerY - 2 * diameters[2] / 2, diameters[3]);

  // Right arm circle
  drawSplitCircle(centerX + 0.88 * diameters[0], centerY, diameters[3]);
  drawSplitCircle(centerX + 1.26 * diameters[0] + diameters[2], centerY, diameters[3]);
  drawLine(centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2,centerY,centerX + 1.26 * diameters[0] + diameters[2]+diameters[3]/2,centerY)
  drawLine(centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2,centerY - 2 * diameters[2] / 2+diameters[3]/2,centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2,centerY - 2 * diameters[2] / 2-diameters[3]/2)

  // List of diameters of circles
  diameters = [60, 50, 80, 30];

  push();
  // Draw the bottom rectangle here
  drawBottomRectangles(centerX, centerY + 1.11 * diameters[1] + diameters[2] + diameters[3], 300, 50, green, yellow);

    // Draw a small green rectangle over the yellow rectangle
    fill("#6F8F6A"); 
    noStroke();
    rect(centerX - 105, centerY + 1.7 * diameters[1] + diameters[2] + diameters[3], 50, 60);
    
    // Draw a small yellow circle on the small green rectangle
    fill("#F8E8B6"); 
    noStroke();
    ellipse(centerX - 80, centerY + 2.3 * diameters[1] + diameters[2] + diameters[3], 50);
  
     // Draw a small red rectangle over the yellow rectangle
     fill("#C15B5C"); 
     rect(centerX + 55, centerY + 1.7 * diameters[1] + diameters[2] + diameters[3], 60, 60);
  
    // Draw a small yellow circle over the small red rectangle
    fill("#F8E8B6"); 
    ellipse(centerX + 85, centerY + 2.2 * diameters[1] + diameters[2] + diameters[3], 60);
  
  pop();  

  // Upper median radius
  drawSplitCircleLR(centerX, centerY - 0.92 * diameters[0], diameters[3]);
  drawSplitCircleLR(centerX, centerY - 1.68 * diameters[0], diameters[0]);

  // Lower median radius
  drawSplitCircleLR(centerX, centerY + 1.3 * diameters[1], diameters[1]);
  drawSplitCircleLR(centerX, centerY + diameters[1] + diameters[2], diameters[2]);
  drawSplitCircleLR(centerX, centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], diameters[1]);
  drawLine(centerX,centerY + 1.71 * diameters[1] + diameters[2] + diameters[3]+diameters[1]/2,centerX,centerY - 1.68 * diameters[0]-diameters[0]/2);

  // Draw more middle bottom square, using red on top and green on bottom
  drawSplitCircleTopRed(centerX + 0.8 * diameters[1], centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], diameters[3]);
  drawSplitCircleTopRed(centerX + 1.7 * diameters[1], centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], diameters[0]);
  drawSplitCircleTopRed(centerX - 0.8 * diameters[1], centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], diameters[3]);
  drawSplitCircleTopRed(centerX - 1.6 * diameters[1], centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], diameters[1]);
  drawLine(centerX - 1.6 * diameters[1] - diameters[1] / 2, centerY + 1.71 * diameters[1] + diameters[2] + diameters[3], centerX + 1.7 * diameters[1] + diameters[0] / 2, centerY + 1.71 * diameters[1] + diameters[2] + diameters[3]);

  // List of diameters of circles
  diameters = [30, 50, 80, 60];

  // Right side vertical circle
  drawSplitCircleLR(centerX + 1.26 * diameters[2] + diameters[0]+diameters[3]/2, centerY - 1.8 * diameters[0]+diameters[2]*0.1, diameters[1]);
  drawSplitCircleLR(centerX + 1.26 * diameters[2] + diameters[0]+diameters[3]/2, centerY - 1.48 * diameters[0] - diameters[1]+diameters[2]*0.1, diameters[0]);
  drawSplitCircleLR(centerX + 1.26 * diameters[2] + diameters[0]+diameters[3]/2, centerY - 0.65 * diameters[0] - diameters[1] - diameters[2]+diameters[2]*0.1, diameters[2]);
  drawLine(centerX + 1.26 * diameters[2] + diameters[0]+diameters[3]/2,centerY,centerX + 1.26 * diameters[2] + diameters[0]+diameters[3]/2,centerY - 0.65 * diameters[0] - diameters[1] - diameters[2]+diameters[2]*0.1-diameters[2]/2);

  // Draw background texture
  for (let i = 0; i < 10000; i++) {
    stroke(200, 200, 250, 50);
    point(random(width), random(height));
  }
}

function draw() {
  // Empty draw function
}

function drawBackgroundRect(x, y, width, height, color) {
  fill(color);
  rect(x, y, width, height);
}

function drawBottomRectangles(centerX, y, rectWidth, rectHeight, green, yellow) {
  let totalWidth = rectWidth * 3;
  let startX = centerX - totalWidth / 2;
  
  fill(green);
  noStroke();
  rect(startX + 50, y + 40, (rectWidth * 3) - 100, rectHeight + 10);
  
  fill(yellow);
  rect(startX + rectWidth, y + 30, rectWidth, rectHeight + 10);
}

function drawLine(x,y,x1,y1){
  push();
  stroke(235,187,138)
  strokeWeight(3)
  line(x,y,x1,y1)
  pop();
}

