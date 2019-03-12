

let bus = document.querySelector('.logo-heading');
bus.addEventListener('mouseover', function(){ 
bus.style.color = 'orange'; 
});

document.addEventListener('keydown', logKey);
function logKey(e) {
log.textContent += ` ${e.code}`;
}

var syntheticEvent = new WheelEvent("syntheticWheel", {"deltaX": 4, "deltaMode": 0});
console.log(syntheticEvent.deltaX);


var script = document.createElement("script");
  script.addEventListener("load", function(event) {
    console.log("Alll abooooaaard!!!!!");
});
script.src = "js/index.js";
script.async = true;
document.getElementsByTagName("script")[0].parentNode.appendChild(script);


const aTags = document.querySelectorAll('a');
aTags.forEach(function(currentValue){
    currentValue.addEventListener('click', function(e){
        e.preventDefault();
        e.target.style.color = 'lightblue';
    }) 
});

let container = document.querySelector('.container home');
container.addEventListener('click', function(e){
e.style.backgroundColor = 'lightblue';
console.log('here I am');
});
