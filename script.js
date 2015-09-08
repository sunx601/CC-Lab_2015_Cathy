//ccLAB 2015 Monday

//place to save tasks
//delcare a array variable called 'taskArray'
var taskArray = [];

//update task list
//define a function and give it a variable name called 'updateTasks'
var updateTasks = function(){
  
  //defines the last task list div
	var taskListHolding = document.getElementById('taskList');
  
  //empty the task lisk
  taskListHolding.innerHTML='';
  //determine task list length
  var len = taskArray.length;
  var i;
  
  for(i=0; i<len; i++){
    console.log('task ' + i + ": " + taskArray[i]);
    //create element
    var newTask = document.createElement('div');

    //ddefine the div's ID and it's class
    newTask.id = i;
    newTask.className ='task';
    
    //create the task paragraph 
    var task = document.createElement('p');
    
    //assign the task to the task div
    task.innerHTML = taskArray[i];
    
    //create the delete button
    var deleteButton = document.createElement('button');
    //set the delete button ID to deleteButton
    deleteButton.id = 'deleteButton';
    //add a value to our button
    deleteButton.innerText='X';
    
    //listen for the click
    deleteButton.addEventListener('click', function(e){
      e.preventDefault();
      deleteTask(e);

    });
    
    //append the task to the taskdiv
    newTask.appendChild(task);
    
    //append the delete button to the newTask div
    newTask.appendChild(deleteButton);
    
    //append the taskDiv to the tasklistholding Div
    taskListHolding.appendChild(newTask);
    
  };
  
};

//save task
var saveTask = function(){
	//defines input form and assigns the value
  var taskInput = document.getElementById('newTask');
  	var newTask = taskInput.value;

  //add new value to your array
  taskArray.push(newTask);
  	
   //updateTasks 
  updateTasks();
    
    taskInput.value="";
    console.log(taskArray);

};


//delete task
var deleteTask = function(e){
	var taskNumber = e.target.parentElement.id; 	
  var answer = prompt("Are you sure to delete?");
  if(answer === "Yes" || answer === "yes" || answer === "Y" || answer ==="y"){
    taskArray.splice(taskNumber, 1);
    updateTasks();
  } 
  
};


//init
var init = function(){
	//define the add button
  var addButton = document.getElementById('addButton');
   
  //add event listener for click
  addButton.addEventListener('click',function(e){
    e.preventDefault();
    saveTask();
  });
                                          
};

window.onload = init();

//beg of class
//声明一个变量名叫 'myName'，并赋值为一段文字 “Jiyeon”
var myName = "Jiyeon";
//在console窗口以日志的类型输出括号里的内容，这里是将'myName'的值输出来。
console.log(myName);
//声明一个变量名叫 'len'，并赋值为变量 'myName' 的内容的长度
var len = myName.length;
//len: 6
console.log("len: " + len);

var calculator = function(numberOne,numberTwo, numberThree){
  var returnNumber = numberOne*numberTwo + numberThree;
  console.log(returnNumber);
};

calculator(10, 10, 10);
//console.log 中会输出 110
calculator(10, 11, 12);
calculator(13, 14, 15);

