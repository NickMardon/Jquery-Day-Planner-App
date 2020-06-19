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

var nineSave = $("#nineSave");
var tenSave = $("#tenSave");
var elevenTSave= $("#elevenSave");
var twelveSave = $("#twelveSave");
var oneSave = $("#oneSave");
var twoSave = $("#twoSave");
var threeSave = $("#threeSave");
var fourSave = $("#fourSave");
var fiveSave = $("#fiveSave");

//TODO: when submit button is clicked save the value of the text area to local storage

nineSave.on("click", function(){
    console.log("clicked");
    var userTodo = nineTodo.val()
    console.log(userTodo);
    localStorage.setItem("userTodo", JSON.stringify(userTodo));
})

// $(".saveBtn").on("click", function(){
//     alert("clicked");
// })

// $("#nineSave").on("click", function(){
//     console.log("click")
// });

var savedTodo = localStorage.getItem("userTodo");
nineTodo.text(savedTodo);