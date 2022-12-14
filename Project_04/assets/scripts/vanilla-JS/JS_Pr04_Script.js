
// to print something in the javascript console
console.log("Hello, world!");

// different datatypes are not important in the javascript
// to define a variable we can use var, let, const in the javascript

var test_pElement_Text = "Welcome to my javascript review in 2022.";
console.log(test_pElement_Text);

let test_pElement_Creation = document.createElement("p");
test_pElement_Creation.setAttribute("id", "p-element-1");
test_pElement_Creation.innerText = test_pElement_Text;

const main_selection = document.querySelector(".main-content")
main_selection.appendChild(test_pElement_Creation)
