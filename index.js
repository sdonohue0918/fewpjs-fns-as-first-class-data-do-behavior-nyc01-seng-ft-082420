/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  let time = parseInt(timeString)
  if (time === 12) {
    return "Good Morning"
  } else if (time > 12 && time <= 17) {
    return "Good Afternoon"
  } else if (time > 17) {
    return "Good Evening"
  } else {
    return "What time is it?"
  }

  };

  function displayMessage(msg) {
    let node = document.getElementById('greeting');
    node.innerHTML = msg;
  };

 