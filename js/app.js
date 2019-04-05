console.log('js is live');

class Target {
	constructor() {
		this.value = 1;
		this.row = (Math.ceil(Math.random() * 6))
		// row -- random row bt 1 and 6
	}

}

const user = {
	shoot(coordinates){
		//when user presses spacebar, it will trigger the shoot function to pew pew
	}
}

const game = {
	score: 0,
	time: 0,
	ammo: 5,
	targets: [],
	intervalId: null,
	marginRate: 0,
	currentDuck: null,
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
			const newTarget = new Target()
			this.targets.push(newTarget)
		}
		console.log(this.targets);
	},
	move(){
			// if there's a current duck
			// move it
	},
	newDuck() {
		// get duck from array
		// make it be current duck
		// jquery -- create div it in its row 
		

	}
	// 1. start --  get new duck
	// 2. previous duck goes off screen  -- destroy the old duck, get new duck
	// 3. duck gets shot -- destroy old duck, get new duck


	// when duck gets shot, remember to destroy div
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

$('#duck').on('click', (event) => {
	// event will contain the location of the click --- console.log it to check
	// call user.shoot(), pass in that info
	console.log('duck has been clicked');
})



// for debugging -- gives you console access to the most recently clicked element as $it
let $it;
$(document).on('click', (e) => {
  $it = $(e.target);
  console.log(e);
})


