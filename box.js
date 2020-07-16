console.log("hi");

var clicked = false;
var resized = false;

var middleX = 50;
var middleY = 50;

function drag(event){
	console.log("dragging");
	if (resized){
		console.log("resizing");
		var x = event.clientX;
		var y = event.clientY;		
		document.getElementById("box").style.width = (x - middleX + 50) + "px";
		document.getElementById("box").style.height = (y - middleY + 50)  + "px";
	}
	if (clicked){
		console.log("clicked");
		middleX = event.clientX;
		middleY = event.clientY;
		document.getElementById("box").style.left = (middleX - 50) + "px";
		document.getElementById("box").style.top = (middleY - 50) + "px";
	}

	
}

function toggle(){
	clicked = !clicked;
	console.log(clicked);
}

function toggleResize(event){
	event.stopPropagation();
	resized = !resized;
	console.log(resized);
}

document.body.addEventListener("mousemove", drag);
document.getElementById("box").addEventListener("mousedown", toggle);
document.getElementById("box").addEventListener("mouseup", toggle);
document.getElementById("resize").addEventListener("mousedown", toggleResize);
document.getElementById("resize").addEventListener("mouseup", toggleResize);