
function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(255)

	let s = second ()
	if (s < 10)  {
		s = "0" + s
	}

	let m = minute ()
	if (m < 10)  {
		m = "0" + m
	}

	let h = hour ()
	if (h < 10)  {
		h = "0" + h
	}

	let txt = h + ":" + m + ":" + s


	fill (0)
	noStroke

	circle (20,20,8) - circle (35,20,8) - circle (50,20,8) - circle (65,20,8) - circle (80,20,8) - circle (95,20,8)
	circle (20,35,8) - circle (35,35,8) - circle (50,35,8) - circle (65,35,8) - circle (80,35,8) - circle (95,35,8)
	circle (20,50,8) - circle (35,50,8) - circle (50,50,8) - circle (65,50,8) - circle (80,50,8) - circle (95,50,8)
	circle (20,65,8) - circle (35,65,8) - circle (50,65,8) - circle (65,65,8) - circle (80,65,8) - circle (95,65,8)
	circle (20,80,8) - circle (35,80,8) - circle (50,80,8) - circle (65,80,8) - circle (80,80,8) - circle (95,80,8)

	circle (125,20,8) - circle (140,20,8) - circle (155,20,8) - circle (170,20,8) - circle (185,20,8) - circle (200,20,8)
	circle (125,35,8) - circle (140,35,8) - circle (155,35,8) - circle (170,35,8) - circle (185,35,8) - circle (200,35,8)
	circle (125,50,8) - circle (140,50,8) - circle (155,50,8) - circle (170,50,8) - circle (185,50,8) - circle (200,50,8)
	circle (125,65,8) - circle (140,65,8) - circle (155,65,8) - circle (170,65,8) - circle (185,65,8) - circle (200,65,8)
	circle (125,80,8) - circle (140,80,8) - circle (155,80,8) - circle (170,80,8) - circle (185,80,8) - circle (200,80,8)

	circle (230,20,8) - circle (245,20,8) - circle (260,20,8) - circle (275,20,8) - circle (290,20,8) - circle (305,20,8)
	circle (230,35,8) - circle (245,35,8) - circle (260,35,8) - circle (275,35,8) - circle (290,35,8) - circle (305,35,8)
	circle (230,50,8) - circle (245,50,8) - circle (260,50,8) - circle (275,50,8) - circle (290,50,8) - circle (305,50,8)
	circle (230,65,8) - circle (245,65,8) - circle (260,65,8) - circle (275,65,8) - circle (290,65,8) - circle (305,65,8)
	circle (230,80,8) - circle (245,80,8) - circle (260,80,8) - circle (275,80,8) - circle (290,80,8) - circle (305,80,8)

	circle (335,20,8) - circle (350,20,8) - circle (365,20,8) - circle (380,20,8) - circle (395,20,8) - circle (410,20,8)
	circle (335,35,8) - circle (350,35,8) - circle (365,35,8) - circle (380,35,8) - circle (395,35,8) - circle (410,35,8)
	circle (335,50,8) - circle (350,50,8) - circle (365,50,8) - circle (380,50,8) - circle (395,50,8) - circle (410,50,8)
	circle (335,65,8) - circle (350,65,8) - circle (365,65,8) - circle (380,65,8) - circle (395,65,8) - circle (410,65,8)
	circle (335,80,8) - circle (350,80,8) - circle (365,80,8) - circle (380,80,8) - circle (395,80,8) - circle (410,80,8)

	circle (440,20,8) - circle (455,20,8) - circle (470,20,8) - circle (485,20,8) - circle (500,20,8) - circle (515,20,8)
	circle (440,35,8) - circle (455,35,8) - circle (470,35,8) - circle (485,35,8) - circle (500,35,8) - circle (515,35,8)
	circle (440,50,8) - circle (455,50,8) - circle (470,50,8) - circle (485,50,8) - circle (500,50,8) - circle (515,50,8)
	circle (440,65,8) - circle (455,65,8) - circle (470,65,8) - circle (485,65,8) - circle (500,65,8) - circle (515,65,8)
	circle (440,80,8) - circle (455,80,8) - circle (470,80,8) - circle (485,80,8) - circle (500,80,8) - circle (515,80,8)

	circle (545,20,8) - circle (560,20,8) - circle (575,20,8) - circle (590,20,8) - circle (605,20,8) - circle (620,20,8)
	circle (545,35,8) - circle (560,35,8) - circle (575,35,8) - circle (590,35,8) - circle (605,35,8) - circle (620,35,8)
	circle (545,50,8) - circle (560,50,8) - circle (575,50,8) - circle (590,50,8) - circle (605,50,8) - circle (620,50,8)
	circle (545,65,8) - circle (560,65,8) - circle (575,65,8) - circle (590,65,8) - circle (605,65,8) - circle (620,65,8)
	circle (545,80,8) - circle (560,80,8) - circle (575,80,8) - circle (590,80,8) - circle (605,80,8) - circle (620,80,8)




	//rect(0, height/3 * 0 , second() / 60 * width, height/3)//
	//rect(0, height/3 * 1 , minute() / 60 * width, height/3)//
	//rect(0, height/3 * 2 , hour() / 24 * width, height/3)//



	fill (0)
	noStroke

	textAlign(CENTER, CENTER)
	textSize(30)


	text (txt, width/2, height/2)


}