//Pseudo Code 

// TODO: Select elements from HTML
var saveBtn = $(".saveBtn");
var todoInput = $("textarea").val();
var  timeBlock = $(".time-block"); 
var hour = $(".hour");

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
var elevenSave= $("#elevenSave");
var twelveSave = $("#twelveSave");
var oneSave = $("#oneSave");
var twoSave = $("#twoSave");
var threeSave = $("#threeSave");
var fourSave = $("#fourSave");
var fiveSave = $("#fiveSave");

//TODO: when submit button is clicked save the value of the text area to local storage

nineSave.on("click", function(){
    console.log("clicked");
    var userNineTodo = nineTodo.val()
    console.log(userNineTodo);
    localStorage.setItem("userTodoNine", JSON.stringify(userNineTodo));
})
tenSave.on("click", function(){
    console.log("clicked");
    var userTenTodo = tenTodo.val()
    console.log(userTenTodo);
    localStorage.setItem("userTodoTen", JSON.stringify(userTenTodo));
    
})
elevenSave.on("click", function(){
    console.log("clicked");
    var userElevenTodo = elevenTodo.val()
    console.log(userElevenTodo);
    localStorage.setItem("userTodoEleven", JSON.stringify(userElevenTodo));
    
})
function displaySaveTodos(){
    var savedTodoNine = localStorage.getItem("userTodoNine");
    nineTodo.text(savedTodoNine);

    var savedTodoTen = localStorage.getItem("userTodoTen");
    tenTodo.text(savedTodoTen);

    var savedTodoEleven = localStorage.getItem("userTodoEleven");
    elevenTodo.text(savedTodoEleven);
};
displaySaveTodos();

// var savedTodoTen = localStorage.getItem("userTodoTen");
// tenTodo.text(savedTodoTen);

// var savedTodoEleven = localStorage.getItem("userTodoEleven");
// tenTodo.text(savedTodoEleven);