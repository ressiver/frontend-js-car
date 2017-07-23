var car = {
	color: 'white',
	dours: 4,
	speed: 0,
	defaultSpeed: 60,
	maxSpeed: 100,
	seats: 4,
	passengers: [],
	put() {
		if (this.passengers.length < this.seats) {
			this.passengers.push(true);
		}
	},

};

