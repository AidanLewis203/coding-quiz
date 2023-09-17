// add variables for the questions
var article = document.article;
var question = document.querySelector(".questions");
var questionOptions = ["Commonly used data types do NOT include", "The condition in an IF/Else statement is enclosed with _____", ""];
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");






function startQuiz (event){
    event.preventDefault()
    var listEl = document.createElement("ol");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    li1.addId("#option1");
    li2.addId("#option2");
    li3.addId("#option3");
    li4.addId("#option4");
    article.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
};


