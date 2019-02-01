var user=document.getElementById("userInput");
var btn=document.getElementById("enter");
var ul=document.querySelector("ul");
var item=document.getElementsByTagName("li");

function inputLength(){
    return user.value.length;
}

function createListElement(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(user.value));
    ul.appendChild(li);
    user.value="";
    console.log("hii");
    function crossOut(){
        li.classList.add("done");
    }
    li.addEventListener("click",crossOut);

    var dbtn=document.createElement("button");
    dbtn.appendChild(document.createTextNode("X"));
    li.appendChild(dbtn);
    dbtn.addEventListener("click",deleteListItem)
    
    function deleteListItem(){
        li.classList.add("delete");
        console.log("hii2");
    }
}

function addListAfterClick(){
   if(inputLength()>0){
    console.log("hii3");
    createListElement();}

}

function addListafterKeypress(event){
    if(inputLength()>0  && event.which==13){
        console.log("hii4");
        createListElement();
    }
}
btn.addEventListener("click",addListAfterClick);

user.addEventListener("keypress",addListafterKeypress);