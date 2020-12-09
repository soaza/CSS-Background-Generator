var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomButton");

console.log(css);
console.log(color1);
console.log(color2);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";


	css.textContent = 
	"First color:"
	+String(color1.value) 
	+ "\n"
	+ " Second color:" + String(color2.value);

} 

function setRandomGradient() {
	 color1.value = getRandomColor();
	 color2.value = getRandomColor();
	 // color1.value = '#aaaaaa';

	 setGradient();
};

function getRandomColor() { 
	var letters= [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
	var color = '#';
	for(var i = 0 ; i<6 ; i++){ 
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;

}

setGradient();

color1.addEventListener("input",setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click",setRandomGradient);