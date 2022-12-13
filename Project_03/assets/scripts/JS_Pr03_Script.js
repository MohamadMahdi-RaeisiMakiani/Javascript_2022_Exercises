
const rightNow = new Date();
const myTemplate_1 = `<p id="show-time">Right Now Time is: ${rightNow} | ${rightNow.toDateString()}</p>`;
let send_time_to_element = document.querySelector(".second-div");
send_time_to_element.innerHTML = myTemplate_1;

let add_p_element_1 = document.createElement("p");
add_p_element_1.setAttribute("id", "test-para-1");
add_p_element_1.setAttribute("style", "width: 75rem;");
add_p_element_1.innerText = `This is a test Paragraph, it was added to this html page from a javascript code.`;
add_p_element_1.style["text-align"] = "center";
add_p_element_1.style.color = "green";
add_p_element_1.style.border = "1px solid black";
add_p_element_1.style.margin = "1rem auto";
send_time_to_element.appendChild(add_p_element_1);

select_p_element_1 = document.getElementById("test-para-1")
select_p_element_1.style["font-size"] = "1.5rem"
