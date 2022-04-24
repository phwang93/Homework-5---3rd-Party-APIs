// makeTimeblocks function
function makeTimeblocks(hour, existingTask = "") {
    // var to set current time
    var currentHour = new Date().getHours();

    // additions functions for the time = past, present, or future
    var pastPresentorFuture = "future";
    if (currentHour > hour) pastPresentorFuture = "past";
    if (currentHour === hour) pastPresentorFuture = "present";

    //saved todos from local storage function
    var existingTask = localStorage.getItem(hour);
    console.log(existingTask);

    //prevent exisitingTodo to display "null"
    if (existingTask === null) {
        existingTask = 'N/A';
        }
        //create timeblocks using bootstrap
        $(".container").append($(`
        <div class="row time-block">
        <div class="hour col-1">${hour}:00</div>
        <textarea name="" id="${hour}" cols="30" rows="3" class="description col-9 ${pastPresentorFuture}">${existingTask}</textarea>
        <button class="btn saveBtn col-2">Save</button>
        </div>`));
}
//create visible timeblocks
for (var i = 9; i < 22; i++) {
    makeTimeblocks(i);
}

//display for the currentDay
var displayCurrentDay = document.querySelector("#currentDay");

//function to displayTime
function displayTime(){
    displayCurrentDay.textContent = new Date().toLocaleString();
    setTimeout(displayTime, 1000);
}

displayTime();

//functions for the saveButton
var saveButton= document.querySelectorAll(".saveBtn")

//create eventlistener for saveBtn
for (var i =0; i < saveButton.length; i++) {
    saveButton[i].addEventListener("click", saveTask);
}

//save tasks to localstorage
function saveTask(event) {
    var taskDescription= event.target.parentNode.children[1].value;
    var taskTime= event.target.parentNode.children[1].id;
    localStorage.setItem(taskTime, taskDescription);
}
