console.log('js is live');

class Target {
	constructor() {
		this.value = 1;
	}
}

const user = {
	shoot(){
		//when user presses spacebar, it will trigger the shoot function to pew pew
	}
}

const game = {
	score: 0,
	time: 0,
	ammo: 5,
	targets: [],
	intervalId: null,
	startGame() {//function to begin the game
		this.intervalId = setInterval(() => {//starts the timer and adds 1
			this.time += 1;
			$('#timer').text(this.time) //grabs time and inserts in the timer window
			$('#score').text(this.score)//adds current score to #score div
			// console.log(this.time);
		}, 500)
		this.createTargets(); //this function calls the below function to begin creating Targets
		
	},
	createTargets(){//function to instantiate targets in a loop and store them in an array
		for (let i = 0; i < 10; i++) {
			const newTarget = new Target
			this.targets.push(newTarget)
		}
		console.log(this.targets);
	}
}

$('#ammo').on('click', () =>{
	//this is a counter showing how many shots the user currently has
})

$('#reload').on('click', () =>{
	console.log('reloading!!!');
	//when user clicks this button, it will +5 to their ammunition count
})

$('newGame').on('click', () =>{
	//when user clicks new game, it will show them the rules and then begin the game.startGame() function
})

$('#duck').






