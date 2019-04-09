console.log('js is live');
class Target {
    constructor(id) {
        this.value = 1;
        this.row = (Math.ceil(Math.random() * 6)) // row -- random row between 1 and 6
        this.id = id
    }
}

const user = {
    shoot(target) {
        console.log(target)
        if (game.ammo > 0) {
            if (target.classList.contains("duck") == true) { //check to see if element being clicked on has the class of duck
                // console.log('Boom!!! You hit the duck!!!');
                $('#msgBox').text('Boom! You the the duck!!!')
                game.score += 1; //adds 1 to score
                game.removeDuckDiv(target.id);
                game.ammo -= 1;
            } else {
                $('#msgBox').text('Miss!')
                // console.log('Miss!');
                game.ammo -= 1;
            }
        } else {
            if (game.ammo == 0) {
                // console.log('You need to reload!');
                $('#msgBox').text('Out of ammo!')
            }
        }
    },
    reload() { //adds ammo to the game.ammo value. Only issue is you can keep adding ammo without limit and clicking on the reload button expends 1 round
        if (game.ammo == 0) {
            game.ammo += 5;
        } else {
            if (game.ammo = 1) {
                game.ammo += 4
            } else {
                if (game.ammo = 2) {
                    game.ammo += 3
                } else {
                    if (game.ammo = 3) {
                        game.ammo += 2
                    } else {
                        if (game.ammo = 4) {
                            game.ammo += 1
                        } else {
                            if (game.ammo = 5) {
                                $('#msgBox').text('Ammo full.')
                                // console.log('Ammo is full');
                            }
                        }
                    }
                }
            }
        }
    }
}
const game = {
    rounds: 0,
    score: 0,
    time: null,
    countDown: 6,
    ammo: 5,
    intervalId: null,
    targets: [],
    targetDivArr: [],
    readyTargets: [],
    currentDuck: [],
    startGame() { //function to begin the game
        this.rounds += 1;
        this.intervalId = setInterval(() => { //starts the timer and adds 1
            this.time += 1;
            $('#timer').text('Time: ' + this.time) //grabs time and inserts in the timer window
            $('#score').text('Score: ' + this.score) //adds current score to #score div
            $('#ammo').text('Shots: ' + this.ammo)
            // console.log(this.time);
            // this.roundCounter();
            if (this.ammo == 0) {
                $('#msgBox').text('Reload to continue shooting!')
            }
        }, 1000)
        this.createTargets(); //this function calls the below function to begin creating Targets
        this.newDuck(); //calls the newDuck function to put a new duck on the screen
    },
    // roundCounter() {
    //     //add 1 to the game round count
    //     //when time reaches 60 seconds => stop game, call start game function?
    //     //increase rate at which ducks move across the screen
    //     if (this.time % 60 === 0 && this.time > 0) {
    //         this.rounds += 1;
    //         clearInterval(this.intervalId)
    //         console.log('game stopped...')
    //         this.time = 0;
    //         game.currentDuck.pop() //removes the duck from game.currentDuck array
    //         $('img').remove() //remove parent div of duckPic from the DOM/screen
    //         //store player 1 round 1 score in an array?
    //         //add message indicating that round 2 will begin
    //         //call startGame() function to start the new round
    //         let secondsLeft = 3;
    //         let auxInterval = setInterval(() => {
    //             if (secondsLeft > 0) {
    //                 console.log('Round ' + this.rounds + ' starts in ' + secondsLeft);
    //                 $('#msgBox').text('Round ' + this.rounds + ' starts in ' + secondsLeft)
    //                 secondsLeft -= 1;
    //             }
    //             else {
    //                 clearInterval(auxInterval)
    //                 this.startGame();

    //             }
    //         }, 1000)

    //     }
    // },
    createTargets() { //function to instantiate targets in a loop and store them in an array
        for (let i = 0; i < 50; i++) { //creates targets with unique row # and stores them in targets array
            const newTarget = new Target(i)
            this.targets.push(newTarget)
        }


        for (let i = 0; i < 50; i++) { //creates divs, which will store targets with unique ID and stores them in targetDiv array
            const $targetDiv = $('<div/>').attr('id', i)
            this.targetDivArr.push($targetDiv)
        }

        for (let i = 0; i < 50; i++) {//takes the targets and appends them into a div and stores into a new array
            this.targetDivArr[i].append(this.targets[i])
            this.readyTargets.push(this.targetDivArr[i])
        }

    },
    newDuck() {
        // get duck from array, make it be current duck
        // console.log(this.currentDuck);
        // jquery -- create div and put it in its row 

        // if the timer is at zero, call gameOver function and return 

        // if (..) {
        //     gameOVer
        //     return 
        // }

        const duckPic = $('<img/>').addClass("duck").attr("src", "https://media3.giphy.com/media/pSJbJNaiTl6mc/giphy.gif") // give the duckPic a class and add image of duck

        const duckID = "duck-" + this.readyTargets[0][0].id

        duckPic.attr("id", duckID)

        // duckPic.attr("id", )

        this.currentDuck.push(this.readyTargets[0])
        this.currentDuck[0].append(duckPic)

        if (this.targets[0].row == 1) {
            this.currentDuck[0].appendTo($('#row1'))
        } else {
            if (this.targets[0].row == 2) {
                 this.currentDuck[0].appendTo($('#row2'))
            } else {
                if (this.targets[0].row == 3) {
                     this.currentDuck[0].appendTo($('#row3'))
                } else {
                    if (this.targets[0].row == 4) {
                         this.currentDuck[0].appendTo($('#row4'))
                    } else {
                        if (this.targets[0].row == 5) {
                             this.currentDuck[0].appendTo($('#row5'))
                        } else {
                            if (this.targets[0].row == 6) {
                                 this.currentDuck[0].appendTo($('#row6'))
                            }
                        }
                    }
                }
            }
        }
        this.targets.shift() // removes the first element from the game.targets array

        const thisDuckID = this.currentDuck[0].id

        this.currentDuck[0].animate({ // animates the div holding the duck img to move across the screen
                marginLeft: "+=521px"
            }, 
            // how long the animation should take
            5000, 
            // what should happen when the animation is done
            () => {
                console.log("duck is done moving")
                    //remove parent div of duckPic from the DOM/screen

                    if (this.currentDuck[0]) {
                        const duckToRemoveID = this.currentDuck[0][0].id

                        this.removeDuckDiv(duckToRemoveID);     
                    }


                    this.newDuck();

                    // this.newDuck() //call newDuck() function
                    /*     targets: [],
                            targetDivArr: [],
                            readyTargets: [],
                            currentDuck: [],*/
            }
        )

    },
    removeDuckDiv(id){
        const idToRemove = "#" + id;
        $(idToRemove).remove();
        this.currentDuck.shift();
        this.readyTargets.shift();
        this.targetDivArr.shift();
        this.targets.shift();
 
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
    user.reload()
    console.log('reloading!!!');
    //when user clicks this button, it will +5 to their ammunition count
})
$('#newGame').on('click', () => {
    console.log('new game has been clicked');
    game.startGame();
    //when user clicks new game, it will show them the rules and then begin the game.startGame() function
})
$('#duck').on('click', (event) => {
    // event will contain the location of the click --- console.log it to check
    // call user.shoot(), pass in that info
    console.log('duck has been clicked');
})

$('#screen').on('click', (e) => {
    console.log('screen has been clicked');
    user.shoot(e.target);
})
// add listener for #screen
    // user.shoot(e.target);

$(document).on('keydown', (e) => {
    if(e.key==" ") {

    }
})

// for debugging -- gives you console access to the most recently clicked element as $it

// let $it;
// $(document).on('click', (e) => {
//     $it = $(e.target);
//     console.log(e.target);
// })
