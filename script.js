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
var twelveTodo = $("#12pmTodo");
var oneTodo = $("#1pmTodo");
var twoTodo = $("#2pmTodo");
var threeTodo = $("#3pmTodo");
var fourTodo = $("#4pmTodo");
var fiveTodo = $("#5pmTodo");

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

//TODO: when save button is clicked save the value of the text area to local storage

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
twelveSave.on("click", function(){
    console.log("clicked");
    var userTwelveTodo = twelveTodo.val()
    console.log(userTwelveTodo);
    localStorage.setItem("userTodoTwelve", JSON.stringify(userTwelveTodo));
    
})
oneSave.on("click", function(){
    console.log("clicked");
    var userOneTodo = oneTodo.val()
    console.log(userOneTodo);
    localStorage.setItem("userTodoOne", JSON.stringify(userOneTodo));
    
})
twoSave.on("click", function(){
    console.log("clicked");
    var userTwoTodo = twoTodo.val()
    console.log(userTwoTodo);
    localStorage.setItem("userTodoTwo", JSON.stringify(userTwoTodo));
    
})
threeSave.on("click", function(){
    console.log("clicked");
    var userThreeTodo = threeTodo.val()
    console.log(userThreeTodo);
    localStorage.setItem("userTodoThree", JSON.stringify(userThreeTodo));
    
})
fourSave.on("click", function(){
    console.log("clicked");
    var userFourTodo = fourTodo.val()
    console.log(userFourTodo);
    localStorage.setItem("userTodoFour", JSON.stringify(userFourTodo));
    
})
fiveSave.on("click", function(){
    console.log("clicked");
    var userFiveTodo = fiveTodo.val()
    console.log(userFiveTodo);
    localStorage.setItem("userTodoFive", JSON.stringify(userFiveTodo));
    
})
//display the values saved in local storage to text areas
function displaySaveTodos(){
    var savedTodoNine = localStorage.getItem("userTodoNine");
    nineTodo.text(savedTodoNine);

    var savedTodoTen = localStorage.getItem("userTodoTen");
    tenTodo.text(savedTodoTen);

    var savedTodoEleven = localStorage.getItem("userTodoEleven");
    elevenTodo.text(savedTodoEleven);

    var savedTodoTwelve = localStorage.getItem("userTodoTwelve");
    twelveTodo.text(savedTodoTwelve);

    var savedTodoOne = localStorage.getItem("userTodoOne");
    oneTodo.text(savedTodoOne);

    var savedTodoTwo = localStorage.getItem("userTodoTwo");
    twoTodo.text(savedTodoTwo);

    var savedTodoThree = localStorage.getItem("userTodoThree");
    threeTodo.text(savedTodoThree);

    var savedTodoFour = localStorage.getItem("userTodoFour");
    fourTodo.text(savedTodoFour);

    var savedTodoFive = localStorage.getItem("userTodoFive");
    fiveTodo.text(savedTodoFive);
};
displaySaveTodos();
 //TODO: toggle classes based on current time

 var dt = new Date($.now());
 var currentTime = dt.getHours();
 console.log(currentTime);
//toggle class by time of day
 if(currentTime > 9){
     nineTodo.parent().addClass("past");
 } else if (currentTime === 9){
     nineTodo.parent().addClass("present");
 } else {
     nineTodo.parent().addClass("future");
 }

 if(currentTime > 10){
    tenTodo.parent().addClass("past");
} else if (currentTime === 10){
    tenTodo.parent().addClass("present");
} else {
    tenTodo.parent().addClass("future");
}

if(currentTime > 11){
    elevenTodo.parent().addClass("past");
} else if (currentTime === 11){
    elevenTodo.parent().addClass("present");
} else {
    elevenTodo.parent().addClass("future");
}

if(currentTime > 12){
    twelveTodo.parent().addClass("past");
} else if (currentTime === 12){
    twelveTodo.parent().addClass("present");
} else {
    twelveTodo.parent().addClass("future");
}

if(currentTime > 13){
    oneTodo.parent().addClass("past");
} else if (currentTime === 13){
    oneTodo.parent().addClass("present");
} else {
    oneTodo.parent().addClass("future");
}

if(currentTime > 14){
    twoTodo.parent().addClass("past");
} else if (currentTime === 14){
    twoTodo.parent().addClass("present");
} else {
    twoTodo.parent().addClass("future");
}

if(currentTime > 15){
    threeTodo.parent().addClass("past");
} else if (currentTime === 15){
    threeTodo.parent().addClass("present");
} else {
    threeTodo.parent().addClass("future");
}

if(currentTime > 16){
    fourTodo.parent().addClass("past");
} else if (currentTime === 16){
    fourTodo.parent().addClass("present");
} else {
    fourTodo.parent().addClass("future");
}

if(currentTime > 17){
    fiveTodo.parent().addClass("past");
} else if (currentTime === 17){
    fiveTodo.parent().addClass("present");
} else {
    fiveTodo.parent().addClass("future");
}

