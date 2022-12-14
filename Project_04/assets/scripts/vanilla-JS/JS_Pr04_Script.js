// different datatypes are not important in the javascript
// to define a variable we can use var, let, const in the javascript
// -----------
// They're different in scopes and declarations
// var declarations are globally scoped or function/locally scoped.
// when you use var to define a variable you can re-declare it
// var name = "Alex";
// var name = "Mona";
// name = "Jack";
// -----------
// scope of let is block
// when you use let to define a variable you can't re-declare it but you can update it.
// let famliy = "Brown";
// let famliy = "Brown"; ---> You'll get error
// famliy = "White";
// -----------
// You can't update or re-declare const
// -----------
// We talk about thier differences more at the continue

// in all my comments html tag: html element

// to print something in the javascript console
console.log("Hello, world!");

// define a variable using var
var test_pElement_Text = "Welcome to my javascript review in 2022.";
console.log(test_pElement_Text);

// define a variable using let
// create a html element (a p tag - paragraph in html -)
let test_pElement_Creation = document.createElement("p");
// add an atribute to that created element
test_pElement_Creation.setAttribute("id", "p-element-1");
// insert Text inside of tag
test_pElement_Creation.innerText = test_pElement_Text;

// define a variable using const
// select an element in the our html file
const main_selection = document.querySelector(".main-content")
// append the created element to the selected tag
main_selection.appendChild(test_pElement_Creation)
