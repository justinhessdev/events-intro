console.log("Script is loaded");
var myButton = document.querySelector("#myButton");
var heading = document.querySelector("h1");
var toggle = null;

function yell(){
  toggle=!toggle;
  heading.innerText = toggle;
}

function whisper() {
  myButton.innerText = "SHHHH.....";
}

// myButton.addEventListener('click', yell);
myButton.addEventListener('click', function() {
  toggle=!toggle;
  heading.innerText = toggle;
});
// yell vs yell()
// yell refers to the method and stores it in memory
// for later use ------> CALLBACK FUNCTION
// yell() calls the method immediately
heading.addEventListener('mouseover', whisper);

// function() {
//   console.log("hellloooo");
// }
