//array of tasks 
var taskArray = [];

//delete task function, define functions as variables, e stands for a id/task number
var deleteTask = function(e){
	var taskNumber = e.target.parentElement.id; 	
  var answer = prompt("Are you sure to delete?");
  if(answer === "Yes" || answer === "yes" || answer === "Y" || answer ==="y"){
    taskArray.splice(taskNumber, 1);
    updateTasks();
  
  } 
  
};


//save task function
var saveTask = function () {
	//refers in the html, the input is text-string, going to make it into the taskarray, whatever we put, it goes to the newarray as new vairable
	var newTask = $('#newTask').val(); 
	//$ is jquery, calling the value id, look for this id called "new task") ???
	taskArray.push(newTask);

	$('#newTask').val('Type Your List');
	$('#newTask').click(function(){
		$(this).val(' ');
	});
	$('#newTask').mouseleave(function(){
		$(this).val('Type Type!');
	});

	$('.newTask').hover(function(){
	$(this).css("background", "#636363"); 	
  });
	updateTasks();
}
//update tasks function 
var updateTasks = function (){
	$('#taskList').empty();
	//clear the task list
	$(taskArray).each(function(i){
		// for each element, create a delete button for it. 
		var deleteButton = $('<button/>');
		//let it be a button, treat the id as a delebutton as that style, for its text, put an X, if you click on it, call the function, 
		// and in the function, delete the task; att has a function called text, and it has a click function.
		deleteButton.attr('id', 'deleteButton').text('X').click(function(e){
			deleteTask(e);
		});
	//deletebutton attribute : refer things in css 
		var newTask = $('<div/>');
		//a new task should equal to the div
		newTask.attr('id', i).addClass("task").html('<p>' + this +'</p>');

		newTask.append(deleteButton);


		$("#taskList").append(newTask);
	});

}
//init (initialized)
var init = function(){

	$('#addButton').click(function(e){
		e.preventDefault();
		//dont use your default function, but instead call save task 
		saveTask();
	});
};

$(document).ready(init);
