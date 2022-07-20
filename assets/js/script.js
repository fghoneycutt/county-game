//initial array to hold all counties
var counties = [
  "Alamance",
  "Alexander",
  "Alleghany",
  "Anson",
  "Ashe",
  "Avery",
  "Beaufort",
  "Bertie",
  "Bladen",
  "Brunswick",
  "Buncombe",
  "Burke",
  "Cabarrus",
  "Caldwell",
  "Camden",
  "Carteret",
  "Caswell",
  "Catawba",
  "Chatham",
  "Cherokee",
  "Chowan",
  "Clay",
  "Cleveland",
  "Columbus",
  "Craven",
  "Cumberland",
  "Currituck",
  "Dare",
  "Davidson",
  "Davie",
  "Duplin",
  "Durham",
  "Edgecombe",
  "Forsyth",
  "Franklin",
  "Gaston",
  "Gates",
  "Graham",
  "Granville",
  "Greene",
  "Guilford",
  "Halifax",
  "Harnett",
  "Haywood",
  "Henderson",
  "Hertford",
  "Hoke",
  "Hyde",
  "Iredell",
  "Jackson",
  "Johnston",
  "Jones",
  "Lee",
  "Lenoir",
  "Lincoln",
  "Macon",
  "Madison",
  "Martin",
  "McDowell",
  "Mecklenburg",
  "Mitchell",
  "Montgomery",
  "Moore",
  "Nash",
  "New Hanover",
  "Northampton",
  "Onslow",
  "Orange",
  "Pamlico",
  "Pasquotank",
  "Pender",
  "Perquimans",
  "Person",
  "Pitt",
  "Polk",
  "Randolph",
  "Richmond",
  "Robeson",
  "Rockingham",
  "Rowan",
  "Rutherford",
  "Sampson",
  "Scotland",
  "Stanly",
  "Stokes",
  "Surry",
  "Swain",
  "Transylvania",
  "Tyrrell",
  "Union",
  "Vance",
  "Wake",
  "Warren",
  "Washington",
  "Watauga",
  "Wayne",
  "Wilkes",
  "Wilson",
  "Yadkin",
  "Yancey",
];
//array to hold counties that the player misses (guessed counties will be removed later)
var missedCounties = [
  "Alamance",
  "Alexander",
  "Alleghany",
  "Anson",
  "Ashe",
  "Avery",
  "Beaufort",
  "Bertie",
  "Bladen",
  "Brunswick",
  "Buncombe",
  "Burke",
  "Cabarrus",
  "Caldwell",
  "Camden",
  "Carteret",
  "Caswell",
  "Catawba",
  "Chatham",
  "Cherokee",
  "Chowan",
  "Clay",
  "Cleveland",
  "Columbus",
  "Craven",
  "Cumberland",
  "Currituck",
  "Dare",
  "Davidson",
  "Davie",
  "Duplin",
  "Durham",
  "Edgecombe",
  "Forsyth",
  "Franklin",
  "Gaston",
  "Gates",
  "Graham",
  "Granville",
  "Greene",
  "Guilford",
  "Halifax",
  "Harnett",
  "Haywood",
  "Henderson",
  "Hertford",
  "Hoke",
  "Hyde",
  "Iredell",
  "Jackson",
  "Johnston",
  "Jones",
  "Lee",
  "Lenoir",
  "Lincoln",
  "Macon",
  "Madison",
  "Martin",
  "McDowell",
  "Mecklenburg",
  "Mitchell",
  "Montgomery",
  "Moore",
  "Nash",
  "New Hanover",
  "Northampton",
  "Onslow",
  "Orange",
  "Pamlico",
  "Pasquotank",
  "Pender",
  "Perquimans",
  "Person",
  "Pitt",
  "Polk",
  "Randolph",
  "Richmond",
  "Robeson",
  "Rockingham",
  "Rowan",
  "Rutherford",
  "Sampson",
  "Scotland",
  "Stanly",
  "Stokes",
  "Surry",
  "Swain",
  "Transylvania",
  "Tyrrell",
  "Union",
  "Vance",
  "Wake",
  "Warren",
  "Washington",
  "Watauga",
  "Wayne",
  "Wilkes",
  "Wilson",
  "Yadkin",
  "Yancey",
];
//empty array to hold guessed counties
var namedCounties = [];
//array to hold hints
var hints = ["Ignore the clock, it's not your friend", "Go through the alphabet", "Think about the trips you've taken", "Think about famous places in North Carolina", "You might have missed an obvious one"];
var input = document.getElementById("input");
var time = document.getElementById("time");
var giveUp = document.getElementById("give-up-btn");
var replay = document.getElementById("replay-btn")

//countdown function
var timeLeft = 60 * 10;
function countdown() {
    hintCycle();
    input.removeEventListener("keydown", countdown);
    var timeInterval = setInterval(function () {
        if (timeLeft > -1) {
        var minutes = parseInt(timeLeft / 60, 10);
        var seconds = parseInt(timeLeft % 60, 10);
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        time.textContent = minutes + ":" + seconds;
        timeLeft--;
        } else {
        clearInterval(timeInterval);
        endGame();
        }
    }, 1000);
}
function checkIfRight(){
    var inputVal = document.getElementById("input").value;
    for (var i = 0; i < counties.length; i++){
       if (inputVal.toLowerCase() === counties[i].toLowerCase()){
        namedCounties.push(counties[i]);
        //remove a named county from the initial counties array (any that are not guessed will be printed later for the user to see)
        missedCounties.splice(i, 1);
        document.getElementById("input").value = "";
        createCorrectList(namedCounties[namedCounties.length -1]);
       }
    }
    if (missedCounties.length === 0){
        endGame();
    }
}

function createCorrectList(newLi){
    var text = document.getElementById("game-text");
    //check to see if the county has been guessed already
    for (var i = 0; i<namedCounties.length-1;i++){
        if (namedCounties[namedCounties.length-1] === namedCounties[i]){
            namedCounties.splice(-1);
            text.textContent = "Already guessed that one!"
            return;
        }
    }
    text.textContent = "Yes!"
    setTimeout(function(){
        text.textContent = missedCounties.length + " left to go!"
    }, 2000)
    var list = document.getElementById("correct-answers");
    var listItemEl = document.createElement("li");
    listItemEl.textContent = newLi;
    list.appendChild(listItemEl);
}
function endGame(){
    var h1El = document.getElementById("game-text");
    if (namedCounties.length === 100){
        h1El.textContent = "You named all 100 counties in North Carolina in less than 10 minutes. Geography majors are insane, but you can't help falling in love with them."
    } else if (namedCounties.length === 1) {
        h1El.textContent = "You got 1 county out of 100! You can do better than that, try again to improve your score and time!"
    } else{
        h1El.textContent = "You got " + namedCounties.length + " counties out of 100! Try again to improve your score and time!"
    }
}
function replayGame(){

}

function hintCycle(){
    var text = document.getElementById("game-text");
    setInterval(function(){
        var random =  hints[Math.floor(Math.random() * hints.length)];
        text.textContent = random;
    }, 10000); 
}

//once user starts typing, countdown begins
input.addEventListener("keydown", countdown);
//run function to check if a county is correct
input.addEventListener("keyup", checkIfRight);

//event listeners for Give Up and Replay buttons
giveUp.addEventListener("click", endGame);
replay.addEventListener("click", replayGame)
