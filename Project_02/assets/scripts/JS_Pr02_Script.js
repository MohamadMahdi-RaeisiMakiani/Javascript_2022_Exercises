
// use JS date time object to insert it to html page
const rightNow = new Date();

// using backticks in javascript codes to make
//    html tags and use javasript variables inside it, it called template literals
const myTemplate_1 = `<p id="show-time">Right Now Time is: ${rightNow} | ${rightNow.toDateString()}</p>`;

// select a html element
let send_time_to_element = document.querySelector(".second-div")

// insert html codes inside of selected element
send_time_to_element.innerHTML = myTemplate_1
