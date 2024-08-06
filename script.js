const timeButton = document.querySelector(".time");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");
let displayValue = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (buttonText === "AC") {
      displayValue = "";
    } else if (buttonText === "=") {
      try {
        displayValue = eval(displayValue);
      } catch {
        displayValue = "Error";
      }
    } else if (buttonText === "CE") {
      displayValue = displayValue.slice(0, -1);
    } else {
      displayValue += buttonText === "X" ? "*" : buttonText;
    }

    display.value = displayValue;
  });
});

// Function to update time
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  timeButton.textContent = timeString;
}

// Initial time update
updateTime();
// Update time every second
setInterval(updateTime, 1000);
