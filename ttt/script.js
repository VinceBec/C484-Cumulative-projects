const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const origTimer = document.querySelector(".timer").innerHTML;
const theTitle = document.querySelector("header h1");
const origTitle = document.querySelector("header h1").innerHTML;
var ready = false;
var totalSeconds = 0;
var begin = 0;
// Add leading zero to numbers 9 or below (purely for aesthetics):

// Run a standard minute/second/hundredths timer:
// countUp is called every second (1000 msecs) by the startTimer second
var countUp = function() {
    // Adds a second everytime countUp is called
    ++totalSeconds;
    var minute = Math.floor(totalSeconds/60);
    // reflect totalSeconds onto seconds, keeps it under 60 by removing the minutes once they start to count
    var seconds = totalSeconds - minute*60;
    if(minute < 10)
        minute = "0" + minute;
    if(seconds < 10)
        seconds = "0" + seconds;
    theTimer.innerHTML = minute + ":" + seconds;
}

// Match the text entered with the provided text on the page:



// Start the timer:
var startTimer = function(){
    clearInterval(begin)
    begin = setInterval(countUp, 1000);
}

// Reset everything:
/// Reset textarea: Grab a new string to test on.
function clearText() {
    testArea.value = '';
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keyup", function() {
    // Start the timer if keyup is detected in the test area. Only starts it up once.
    if(!ready){
        theTitle.innerHTML = origTitle + " - TYPING NOW";
        startTimer();
        ready = true;
    }
    // Just stop timer once user input string is the same length as the text string.
    /// Get text of user input, as a string
    var grabber = testArea.value;
    /// Get text of test paragraph, as a string
    var userText = originText.innerHTML
    if(grabber.length === userText.length){
        clearInterval(begin);
    }
});
/// Reset Button: Just reload the page, very lazy
resetButton.addEventListener("click", function() {
    window.location.reload();
});

// Random string to test on, loads one of five strings that the user can test on.
// String is randomly decided on page load, keep hitting Start Over to randomize the string

function insertTest(){
    var tests;
    tests = ["As far as Candy could see there were plenty of people who resembled folks she might have expected to see on the streets of Chickentown, give or take a sartorial detail: a hat, a coat, a wooden snout. But for every one person that looked perfectly human, there were two who looked perfectly other than human. The children of a thousand marriages between humankind and the great bestiary of the Abarat were abroad on the streets of the city.",
    "Ada went outside and took up the axe and began cutting the wood. Afterward, she collected snow for their drinking water, and then she took the map Maurer had left them of his trapline and followed it to his traps to check for foxes. As usual, there was nothing, and she turned back to camp, discouraged.",
    "The CDC team lifted the body up, gripping it beneath the shoulders and legs, and someone snatched the bag out from underneath it. They lowered the body back onto the bare metal deck of the gurney. Stevens had been a pleasant looking man with a cheerful appearance. He was a bluish color now, and his eyes were half open.",
    "Her mother made her come back inside for dinner, and for lunch; and Coraline had to make sure she dressed up warm before she went out, for it was a very cold summer that year; but go out she did, exploring, every day until the day it rained, when Coraline had to stay inside.",
    "Dusted with snow, two stone centaurs flanked the long expanse, towering over Tice's armored sedan and the two battered US Army trucks. On high alert, a dozen soldiers carrying M16s and wearing pistols over their belted overcoats moved like shadows across the road and among the skeletal trees. The night's snowfall had been light; still, it muffled the sounds of distant traffic."
    ]
    var x = Math.floor((Math.random() * tests.length));
    originText.innerHTML = tests[x];
}

function init(){
    insertTest();
    clearText();
}
document.body.onload = init();
