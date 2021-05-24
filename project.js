//main selectors
var enterButton = document.getElementById("enter");//plus button
var input = document.getElementById("Input"); //where to add new task
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");//the to do luist




function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}
//add to do's
function createListElement() {
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
	input.value = ""; 



	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	
//delete to do's
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	
	function deleteListItem(){
		li.classList.add("delete")
	}
	
}


function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

