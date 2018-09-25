
var r, g, b;
var r = 3;
var g = 3;
var b = 255;
var rO, r1, r2;
var rO = 0;
var r1 = 0;
var r2 = 0;

function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch

	stroke(0);
	angleMode(DEGREES)

}

function draw() {
	background(3, 3, 255);

//light
	fill(r, g, b);

	strokeWeight(0);
	triangle(42.577, 0, 242.935, 440.686, 443.294, 0);

strokeWeight(1);
// Arms
	fill(165, 135, 113);
  push();
	translate(176.261, 350.498);
  rotate(151.83);
	rect(0, 0, 25.491, 95.89);
  pop();

	push();
	translate(328.8, 367.498);
 	rotate(-151.83);
	rect(0, 0, 25.491, 95.89);
	pop();

fill(0);
	ellipse(354.763, 291.789, 17.059);
	ellipse(127.64, 287.852, 17.059);


// feet
  fill(255);
  triangle(189.125, 475.992, 196.34, 475.992, 192.733, 486.778);
	triangle(197.721, 475.992, 204.936, 475.992, 201.328, 486.778);
	triangle(206.322, 475.992, 213.537, 475.992, 209.929, 486.778);
	triangle(267.067, 475.992, 274.282, 475.992, 270.674, 486.778);
	triangle(275.663, 475.992, 282.878, 475.992, 279.27, 486.778);
	triangle(284.264, 475.992, 291.479, 475.992, 287.871, 486.778);
// Hands Nails

	triangle(108.057, 277.098, 106.145, 265.887, 115.417, 273.692);
	triangle(116.534, 273.04, 114.622 , 261.829, 122.895, 269.634);
	triangle(124.217, 268.979, 122.305, 257.768, 130.577, 265.573);
	triangle(351.583, 270.51, 359.855, 262.704, 357.943, 273.916);
	triangle(359.165, 274.57, 367.438, 266.765, 365.526, 277.977 );
	triangle(366.743, 278.629, 375.015,270.823 , 373.103 , 282.035);
// Head
	fill(165, 135, 113);
	rect(161.622, 157.054, 160.87, 160.87, 60.113, 60.113, 0, 0);
	fill(196, 162, 134);
	rect(183.831, 197.952, 115.709, 88.699, 26.45, 26.45, 0, 0);
// Body
	fill(165, 135, 113);
  rect(162.036, 452.842, 158.35, 23.09, 7.535);
	rect(153.592, 427.555, 173.421, 25.288, 7.535);
	rect(146.966, 400.069, 188.491, 27.485, 7.535);
	rect(146.966, 372.584, 188.491, 27.485, 7.535);
	rect(146.966, 345.099, 188.491, 27.485, 7.535);
	rect(153.592, 318.003, 177.131, 27.485, 7.535);
// Rect eyes
	fill(161, 186, 255);
	rect(193.953, 215.997, 38.516, 21.492);
	rect(252.785, 215.997, 38.516, 21.492 );
// Nose
  fill(0);
	rect(234.422, 230.761, 16.606, 9.512, 3);

// eyes

strokeWeight(1);
noFill();
beginShape();
vertex(200.755, 226.743);
bezierVertex(200.755, 226.743, 212.888, 235.349, 225.02, 226.243);
endShape();
strokeWeight(1);
noFill();
beginShape();
vertex(259.91, 226.743);
bezierVertex(259.91, 226.743, 272.043 , 235.349 , 284.175, 226.243);
endShape();

// mouth
strokeWeight(1);
noFill();
beginShape();
vertex(220.936, 247.064 );
bezierVertex(220.936, 247.064, 231.813, 257.979, 242.69, 247.064);
endShape();
strokeWeight(1);
noFill();
beginShape();
vertex(242.091, 247.064);
bezierVertex(242.091, 247.064, 252.968 , 257.979 , 263.845, 247.064);
endShape();

//
line(243.688, 157.054, 267.445, 132.894);
fill(0);
ellipse(269.622, 130.68, 8);



strokeWeight(0);

textSize(15);
textAlign(RIGHT);
fill(rO, r1, r2);
text('tap to find ur way', 328 , 100);
textFont('Monaco');


}

function mouseClicked() {
  if (r == 3 && g == 3 && b == 255) {
 r = 255;
 g = 220;
 b = 20;
 rO = 255;
 r1 = 220;
 r2 = 20;
  } else {
    r = 3;
		g = 3;
		b = 255;
    rO = 0;
		r1 = 0;
		r2 = 0;

  }
}
