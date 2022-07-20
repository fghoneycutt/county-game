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
var input = document.getElementById("input");
var time = document.getElementById("time");

//countdown function
var timeLeft = 60 * 10;
function countdown() {
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
      displayGameOver();
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
}

function createCorrectList(newLi){
    //check to see if the county has been guessed already
    for (var i = 0; i<namedCounties.length-1;i++){
        if (namedCounties[namedCounties.length-1] === namedCounties[i]){
            namedCounties.splice(-1);
            return;
        }
    }
    var list = document.getElementById("correct-answers");
    var listItemEl = document.createElement("li");
    listItemEl.textContent = newLi;
    list.appendChild(listItemEl);
}
//once user starts typing, countdown begins
input.addEventListener("keydown", countdown);
//run function to check if a county is correct
input.addEventListener("keyup", checkIfRight);
