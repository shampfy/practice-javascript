// ทดลองเขียน function alert

const clickHere = () => {
  alert("Calculation")
}

const display = document.getElementById("display")
let currentInput = ""

// Handle button clicks query การกดปุ่ม
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent

    // ถ้ากดปุ่ม Clear ข้อมูลช่อง display
    if (value === "Clear") {
      currentInput = ""
    } else if (value === "=") {
      // Do nothing for now when equals is pressed
    } else {
      // Append the value (number or operator) to the input
      currentInput += value
    }

    // Update the display with current input
    display.value = currentInput
  })
})
