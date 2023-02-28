let score = 0;
let total = new Array();
let start;
let end;
var timeElapsed = 0.001;
let final;
let firstRun = true;

window.onload = function() {
    document.getElementById("restart-button").style.display='none';
}

function change(name)
{
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    var random = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (document.getElementById("button").value === name) {
        end = Date.now();
        timeElapsed = (end - start) / 1000;
        document.getElementById("button").value=random;
        start = Date.now();
        return timeElapsed;
    } else {
        return 0;
    }
}

function startFunc() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    var random = alphabet[Math.floor(Math.random() * alphabet.length)];
    start = Date.now();
    document.getElementById("button").value=random;
    firstRun = false;
}

function average() {
    let sum = 0;
    for (let i = 0; i < total.length; i += 1) {
        sum += total[i];
    }
    return sum / 10;
}

function congrats(final) {
    document.getElementById("congrats").innerHTML = `Game over! \nYour average time is ${final} seconds.`;
}

function showButton() {
    document.getElementById("restart-button").style.display='block';

    document.getElementById("restart-button").addEventListener("click", (event) => {
        score = 0;
        total = new Array();
        start = 0;
        end = 0;
        timeElapsed = 0.001;
        final = 0;
        firstRun = true;
        document.getElementById("restart-button").style.display='none';
        document.getElementById("congrats").innerHTML = "";
        document.getElementById("button").value = "Start by Pressing Any Keyboard Button";
        document.getElementById("key-text").innerHTML = `Key Pressed: `;
        document.getElementById("time-text").innerHTML = `Time Elapsed This Round: `;
    });
}


document.addEventListener("keydown", (event) => {
    var name = event.key;
    if (score === 0 && firstRun == true) {
        startFunc();
        start++;
    }
    timeElapsed = change(name);
    if (timeElapsed === 0.001) {
        score++;
        document.getElementById("key-text").innerHTML = `Key Pressed: ${name}`;
        //alert(`key pressed: ${name} \r\ntime elapsed: ${timeElapsed} seconds`); 
    } else if (timeElapsed !== 0) {
        total.push(timeElapsed);
        score++;
        document.getElementById("key-text").innerHTML = `Key Pressed: ${name}`;
        document.getElementById("time-text").innerHTML = `Time Elapsed This Round: ${timeElapsed} seconds`;
        //alert(`key pressed: ${name} \r\ntime elapsed: ${timeElapsed} seconds`); 
    } 
    if (score === 10) {
        final = average();
        congrats(final);
        //alert(`Game over! Your average time: ${final} seconds`);
        document.getElementById("button").value=name;
        document.getElementById("time-text").innerHTML = `Average Time: ${final} seconds`;
        showButton();
    }
    console.log(total);
}, true);