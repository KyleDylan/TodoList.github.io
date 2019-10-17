var ul = document.querySelector("ul");
var input = document.querySelector("input");

deleteTodo();

document.querySelector("ul").addEventListener("click", function(event){
    if(event.target.classList.contains("item")){
        event.target.classList.toggle("completed");
    }
});

document.querySelector("input").addEventListener("keypress", function(event){
    if(event.which === 13){
        var li = document.createElement("li");
        var spanElement = document.createElement("span");
        var icon = document.createElement("icon");
        var newTodo = this.value;
        this.value = " ";

        li.classList.add("item");
        icon.classList.add("fas", "fa-trash-alt");
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTodo);
    }
    deleteTodo();     
});

function deleteTodo(){
    var spans = document.querySelectorAll("span");
    for(let span of spans){
        span.addEventListener("click", function(){
            span.parentElement.remove();
            event.stopPropagation();
        });
    }
}


document.getElementById("add").addEventListener("click", function(){
    input.classList.toggle("display");
});

document.getElementById("dump").addEventListener("click", function(){
    ul.innerHTML = "";
});

