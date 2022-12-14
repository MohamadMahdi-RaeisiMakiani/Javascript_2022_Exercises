
// date time object
const rightNow = new Date();
// template literal
const myTemplate_1 = `<p id="show-time">Right Now Time is: ${rightNow} | ${rightNow.toDateString()}</p>`;
// select a html element ---> new method, it gives a css selector
let send_time_to_element = document.querySelector(".second-div");
// insert html codes to selected html tag(element)
send_time_to_element.innerHTML = myTemplate_1;

// create a html element
let add_p_element_1 = document.createElement("p");
// set some attributes to the created element(tag)
add_p_element_1.setAttribute("id", "test-para-1");
add_p_element_1.setAttribute("style", "width: 75rem;");
// change created element inside text
add_p_element_1.innerText = `This is a test Paragraph, it was added to this html page from a javascript code.`;
// change style of an element
add_p_element_1.style["text-align"] = "center";
add_p_element_1.style.color = "green";
add_p_element_1.style.border = "1px solid black";
add_p_element_1.style.margin = "1rem auto";
// append the created element to the selected tag
send_time_to_element.appendChild(add_p_element_1);

// select a html element ---> old method
select_p_element_1 = document.getElementById("test-para-1")
select_p_element_1.style["font-size"] = "1.5rem"
