let tombol= document.querySelector('.tombol');
let navbar = document.querySelector('.navbar');

tombol.onclick = function (){
	navbar.classList.toggle('nyala')
}

window.addEventListener("load", function(){
	this.setTimeout(function(){
document.getElementById("loader").style.display = "none";
	},5475);
});

var txt="tutorial.ByZhar.com         ";
var speed=250;
var refresh=null;
function action(){ document.title=txt;
txt=txt.substring(1,txt.length)+txt.charAt(0);
refresh=setTimeout("action()",speed);}action();
