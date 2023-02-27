let score = 0;
const total = [];
let start;
let end;
var timeElapsed = 0.001;
let final;
function change(name)
{
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    var random = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (score === 0) {
        start = Date.now();
        document.getElementById("button").value=random;
    }
    if (document.getElementById("button").value === name || score === 0) {
        end = Date.now();
        timeElapsed = (end - start) / 1000;
        document.getElementById("button").value=random;
        start = Date.now();
        return timeElapsed;
    } else if (score != 0){
        return 0;
    }
}

function average() {
    let sum = 0;
    for (let i = 0; i < total.length; i += 1) {
        sum += total[i];
    }
    return sum / 10;
}

    document.addEventListener("keydown", (event) => {
    var name = event.key;
    var code = event.code;
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
    if (score === 11) {
        final = average();
        alert(`game over! your average time: ${final} seconds`);
        document.getElementById("time-text").innerHTML = `Average Time: ${final} seconds`;
    }
}, true);