console.log('js is live');

class Target {
    constructor() {
        this.value = 1;
        this.row = (Math.ceil(Math.random() * 6)) // row -- random row between 1 and 6
    }

}

const user = {
    shoot(target) {
    	if(target.classList.contains("duck") == true) {//check to see if element being clicked on has the class of duck
    		console.log('Boom!!! You hit the duck!!!');
    		game.score += 1;//adds 1 to score 
    		game.currentDuck.pop()//removes the duck from game.currentDuck array
    		$('img').remove()
    	}else{
    		console.log('Miss!');
    	}
        //if class of .duck is true, then remove from currentDuck and call newDuck() function
        //remove parent div of duckPic from the DOM/screen
       }
}

const game = {
    score: 0,
    time: 0,
    ammo: 5,
    targets: [],
    intervalId: null,
    marginRate: 0,
    currentDuck: [],
    startGame() { //function to begin the game
        this.intervalId = setInterval(() => { //starts the timer and adds 1
            this.time += 1;
            $('#timer').text(this.time) //grabs time and inserts in the timer window
            $('#score').text(this.score) //adds current score to #score div
            // console.log(this.time);
        }, 500)
        this.createTargets(); //this function calls the below function to begin creating Targets
    },
    createTargets() { //function to instantiate targets in a loop and store them in an array
        for (let i = 0; i < 10; i++) {
            const newTarget = new Target()
            this.targets.push(newTarget)
        }
        // console.log(this.targets);
    },
    move() {
        // if there's a current duck
        // move it
    },
    newDuck() {
        // get duck from array, make it be current duck
        this.currentDuck.push(this.targets[0])
        this.targets.shift()
        // console.log(this.currentDuck);
        // jquery -- create div and put it in its row 
        const newDuckDiv = $('<div/>')
        const duckPic = $('<img/>').addClass("duck")// give the duckPic a class 
        duckPic.attr("src", "http://images.clipartpanda.com/mallard-clip-art-eend3.png")
        newDuckDiv.append(duckPic)

        if (this.targets[0].row == 1) {
            newDuckDiv.appendTo($('#row1'))
        } else {
            if (this.targets[0].row == 2) {
                newDuckDiv.appendTo($('#row2'))
            } else {
                if (this.targets[0].row == 3) {
                    newDuckDiv.appendTo($('#row3'))
                } else {
                    if (this.targets[0].row == 4) {
                        newDuckDiv.appendTo($('#row4'))
                    } else {
                        if (this.targets[0].row == 5) {
                            newDuckDiv.appendTo($('#row5'))
                        } else {
                            if (this.targets[0].row == 6) {
                                newDuckDiv.appendTo($('#row6'))
                            }
                        }
                    }
                }
            }
        }



    }

    // 1. start --  get new duck
    // 2. previous duck goes off screen  -- destroy the old duck, get new duck
    // 3. duck gets shot -- destroy old duck, get new duck


    // when duck gets shot, remember to destroy div
}

$('#ammo').on('click', () => {
    //this is a counter showing how many shots the user currently has
})

$('#reload').on('click', () => {
    console.log('reloading!!!');
    //when user clicks this button, it will +5 to their ammunition count
})

$('newGame').on('click', () => {
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
    console.log(e.target);
    user.shoot(e.target);
})




