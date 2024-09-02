//task 1//
//1
var mainContent= document.getElementById("main-content");
//2
console.log(mainContent.children);
//3
var renderElement = document.getElementsByClassName('render');
for(var i =0; i < renderElement.length; i++){
    console.log(renderElement[i].innerHTML);
}
//4
document.getElementById("first-name").value="Alex";
//5
document.getElementById("last-name").value ="Bank";
document.getElementById("email").value ="alexbank@example.com";


//task2
//1
var formContentNodeType = document.getElementById("form-content").nodeType;
console.log("Node type of 'form-content':", formContentNodeType);
//2
var lastNameNodeType = document.getElementById("lastName").nodeType;
var lastNameChildNodeType = document.getElementById('lastName').childNodes[0].nodeType;
console.log("Node type of 'lastName':", lastNameNodeType);
console.log("Node type of 'lastName' child:", lastNameChildNodeType);
//3
document.getElementById("lastName").innerHTML = "Last Name: Smith";
//4
var firstChild = mainContent.firstElementChild;
var lastChild = mainContent.lastElementChild;
console.log("First child of 'main-content':", firstChild);
console.log("Last child of 'main-content':", lastChild);
//5
var nextSibling = document.getElementById("lastName").nextElementSibling;
var previousSibling = document.getElementById("lastName").previousElementSibling;
console.log("Next sibling of 'lastName':" , nextSibling);
console.log("Previous sibling of 'lastName':" , previousSibling);
//6
var emailParentNode = document.getElementById("email").parentNode;
var emailNodeType = document.getElementById("email").nodeType;
console.log("Parent node of 'email':" , emailParentNode);
console.log("Node type of 'email':" , emailNodeType);

