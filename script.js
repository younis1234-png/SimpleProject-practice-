const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



function runTheClock(){
   // to get our clock to show the current time 
var date = new Date()
let hr = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()

// Will contains the degrees we want to turn each of the arms
let hrPosition = (hr*360/12) + (min*(360/60)/12);
let minPosition = (min*360/60) + (sec*(360/60)/60);
let secPosition = sec*360/60;

// set our degrees at the top to each element
HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

// rerun our script auto 
// The setInterval() method, 
// offered on the Window and Worker interfaces, 
// repeatedly calls a function or executes a code snippet, with a 
// fixed time delay between each call

var interval = setInterval(runTheClock, 1000)

