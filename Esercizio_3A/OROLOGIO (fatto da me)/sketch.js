
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

	//------------------------------//

	fill (0)
	noStroke
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

	body {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		margin: 0;
		background:#ffffff;
		font-family: 'Roboto', sans-serif;
	}

	.clock {
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(131, 131, 131, 0);
		border-radius: 15px;
		padding: 10px 40px;
		box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
		position: relative;
	}

	.clock div {
		margin: 0 px;
		font-size: 4rem;
		color: #fff;
		text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.3);
		position: relative;
		animation: colorChange 10s infinite;
	}

	.clock span {
		font-size: 3rem;
		color: #000000;
		text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.276);
	}

	@keyframes colorChange {
		0%, 100% { color: #000000; }
	   
	}

	@keyframes glow {
		0%, 100% { box-shadow: 0 0 200px rgba(255, 255, 255, 0.6); }
		10% { box-shadow: 0 0 100px rgb(255, 0, 0); }
		20% { box-shadow: 0 0 200px rgb(255, 81, 0); }
		30% { box-shadow: 0 0 100px rgb(255, 225, 0); }
		40% { box-shadow: 0 0 200px rgb(0, 255, 17); }
		50% { box-shadow: 0 0 100px rgb(0, 251, 255); }
		60% { box-shadow: 0 0 200px rgb(0, 174, 255); }
		70% { box-shadow: 0 0 100px rgb(0, 76, 255); }
		80% { box-shadow: 0 0 200px rgb(136, 0, 255); }
		90% { box-shadow: 0 0 100px rgb(255, 0, 247); }
		
	}

	

	.clock::before {
		content: '';
		position: absolute;
		top: -5px;
		left: -5px;
		right: -5px;
		bottom: -5px;
		border-radius: 20px;
		border: 1px solid rgb(0, 0, 0);
		animation: glow 4s infinite;
	}
</style>
</head>
<body>
<div class="clock">
	<div id="hour">00</div>
	<span>:</span>
	<div id="minute">00</div>
	<span>:</span>
	<div id="seconds">00</div>
</div>
<script>
	function updateClock() {
		const now = new Date();
		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');
		const seconds = String(now.getSeconds()).padStart(2, '0');

		document.getElementById('hour').textContent = hours;
		document.getElementById('minute').textContent = minutes;
		document.getElementById('seconds').textContent = seconds;
	}

	setInterval(updateClock, 1000);
	updateClock(); // initial call to set the clock immediately
</script>
</body>
</html>
