// makeTimeblocks function
function makeTimeblocks(hours, existingTodo = "")

// var to set current time
var currentHour= new Date().getHours();

// additions functions for the time = past, present, or future
var pastPresentorFuture = "future";
if (currentHour > hour) pastPresentorFuture = "past";
if (currentHour === hour) pastPresentorFuture = "present";

//saved todos from local storage function
var existingTodo = localStorage.getItem(hour);

//prevent exisitingTodo to display "null"
if (existingTodo === null) {
    existingTodo() = "";
}

//create timeblocks
$("#container").append($(`
<div class="row time-block">
        <div class="hour col-1">${hour}:00</div>
        <textarea name="" id="${hour}" cols="30" rows="3" class="description col-9 ${pastPresentorFuture}">${existingTodo}</textarea>
        <button class="btn saveBtn col-2">Save</button>
    </div>`));