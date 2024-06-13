function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(255) 

	translate(width/2, height/2)

	stroke(0,50)
	line (-200, 0, 200, 0)
	line (0, -200, 0, 200)

	//rotate(mouseX * 0.01)//

	noStroke
	fill(0)

	push()
	rotate(TAU /12 * (hour() % 12) + TAU / 12 /60 * minute())
	rect(-15, 25 , 30, -100)
	pop()

	push()
	rotate(TAU /60 * minute())
	rect(-10, 25 , 20, -100)
	pop()

	fill(255, 0, 0)
	push()
	rotate(TAU /60 * second())
	rect(-5, 25 , 10, -200)
	pop()

	fill(255)

	circle(0, 0, 12)
}