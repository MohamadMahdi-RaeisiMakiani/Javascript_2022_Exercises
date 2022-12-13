
const rightNow = new Date();
const myTemplate_1 = `<p id="show-time">Right Now Time is: ${rightNow} | ${rightNow.toDateString()}</p>`;
let send_time_to_element = document.querySelector(".second-div")
send_time_to_element.innerHTML = myTemplate_1

let add_p_element_1
