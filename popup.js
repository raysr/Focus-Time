window.onload = function () {
  s=document.getElementById("toclick");
  // Called when the user clicks on the browser action.
  chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
alert("Site : "+tab.url);
    chrome.tabs.executeScript({
      code: 'alert("Tab : "+tab.url)'
    });
  });

};
function move() {
    var elem = document.getElementById("loadulation"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var link= document.getElementById('clickr');
    //onclick
    link.addEventListener('click',move);
});

// *******  tout doux liste logic  *********\\
var taskInput=document.getElementById("new-task");//Add a new task.
var addButton=document.getElementsByTagName("button")[0];//first button
var incompleteTaskHolder=document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
var completedTasksHolder=document.getElementById("completed-tasks");//completed-tasks


//New task list item
var createNewTaskElement=function(taskString){

    var listItem=document.createElement("li");

    //input (checkbox)
    var checkBox=document.createElement("input");//checkbx
    //label
    var label=document.createElement("label");//label
    //input (text)
    var editInput=document.createElement("input");//text
    //button.edit
    var editButton=document.createElement("button");//edit button

    //button.delete
    var deleteButton=document.createElement("button");//delete button

    label.innerText=taskString;

    // function fragile(callback){ var lilVar=20;
    // for (var i=0;i<lilVar.length;i++){
    // 	var labeler="tough"+i;
    
    // }	callback(labeler);}

    //Each elements, needs appending
    checkBox.type="checkbox";
    checkbox.id=labeler
    checkBox.className="berouit";
    editInput.type="text";
    label.setAttribute("for",labeler);

    editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
    editButton.className="edit btn-small zre9 byed padderul";
    deleteButton.innerText="Delete";
    deleteButton.className="delete btn-small zre9 biyed";



    //and appending.
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}



var addTask=function(){
    console.log("Add Task...");
    //Create a new list item with the text from the #new-task:
    var listItem=createNewTaskElement(taskInput.value);

    //Append listItem to incompleteTaskHolder
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value="";

}

//Edit an existing task.

var editTask=function(){
console.log("Edit Task...");
console.log("Change 'edit' to 'save'");


var listItem=this.parentNode;

var editInput=listItem.querySelector('input[type=text]');
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editMode");
        //If class of the parent is .editmode
        if(containsClass){

        //switch to .editmode
        //label becomes the inputs value.
            label.innerText=editInput.value;
        }else{
            editInput.value=label.innerText;
        }

        //toggle .editmode on the parent.
        listItem.classList.toggle("editMode");
}




//Delete task.
var deleteTask=function(){
        console.log("Delete Task...");

        var listItem=this.parentNode;
        var ul=listItem.parentNode;
        //Remove the parent list item from the ul.
        ul.removeChild(listItem);

}


//Mark task completed
var taskCompleted=function(){
        console.log("Complete Task...");
    
    //Append the task list item to the #completed-tasks
    var listItem=this.parentNode;
    completedTasksHolder.appendChild(listItem);
                bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete=function(){
        console.log("Incomplete Task...");
//Mark task as incomplete.
    //When the checkbox is unchecked
        //Append the task list item to the #incomplete-tasks.
        var listItem=this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
            bindTaskEvents(listItem,taskCompleted);
}



var ajaxRequest=function(){
    console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
addButton.onclick=addTask;



var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
    console.log("bind list item events");
//select ListItems children
    var checkBox=taskListItem.querySelector("input[type=checkbox]");
    var editButton=taskListItem.querySelector("button.edit");
    var deleteButton=taskListItem.querySelector("button.delete");


            //Bind editTask to edit button.
            editButton.onclick=editTask;
            //Bind deleteTask to delete button.
            deleteButton.onclick=deleteTask;
            //Bind taskCompleted to checkBoxEventHandler.
            checkBox.onchange=checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
    //for each list item
    for (var i=0; i<incompleteTaskHolder.children.length;i++){

        //bind events to list items chldren(tasksCompleted)
        bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
    }




//cycle over completedTasksHolder ul list items
    for (var i=0; i<completedTasksHolder.children.length;i++){
    //bind events to list items chldren(tasksIncompleted)
        bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
    }




// Issues with usabiliy don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Shange edit to save when you are in edit mode.
// *****************************************\\
var instances = M.AutoInit();
// ************ message**********************\\
var sessionCrt=document.getElementById('sessionValue')

chrome.runtime.sendMessage({actualsession:sessionCrt})



document.addEventListener('DOMContentLoaded', function(){
  var junk = document.getElementById('dashJump')
  junk.onclick=function(){chrome.tabs.create({url: "dashboard/dashboard.html"});}

})
// var car=1;
// if (car){
// 	move();
// }
// document.addEventListener('DOMContentLoaded',function()){
// var inputsC=document.querySelector('berouit');
// var clikd = document.getElementsByClassName('clikd');


// 	clikd.onclick=function(){
// 		for (inputsC in document.getElementsByClassName('row')){
// 		if (inputsC.checked == true){
// 		move();}else {
// 			console.log("A MARCHE PASLOL");
// 		}
// 	}}
	

	






