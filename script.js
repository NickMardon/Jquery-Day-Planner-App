//Pseudo Code 

// TODO: Select elements from HTML
var saveBtn = $(".saveBtn");
var todoInput = $("textarea").val();
var  timeBlock = $(".time-block"); 
var hour = $(".hour");
var todoList = JSON.parse(localStorage.getItem("todos")) || [];

//select text areas by ID
var nineTodo = $("#9amTodo");
var tenTodo = $("#10amTodo");
var elevenTodo = $("#11amTodo");
var twelveTodo = $("#12amTodo");
var oneTodo = $("#1pmTodo");
var twoTodo = $("#2pmTodo");
var threeTodo = $("#3pmTodo");
var fourTodo = $("#4amTodo");

//select save buttons 

var nineSave = $("#9amSave");
var tenSave = $("#10amSave");
var elevenTSave= $("#11amSave");
var twelveSave = $("#12amSave");
var oneSave = $("#1pmSave");
var twoSave = $("#2pmSave");
var threeSave = $("#3pmSave");
var fourSave = $("#4amSave");

//TODO: when submit button is clicked save the value of the text area to local storage

saveBtn.on("click", function(){ 
    console.log("clicked")
    //how do you get the value of the text area?
    var todoInput = $("textarea").val();
    console.log(todoInput);
});