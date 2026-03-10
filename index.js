const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");

let errorTime;

// Initialize error as empty on load
errorEl.innerText = "";

function updateResults() {
  // 1. Clear any existing timer to prevent overlapping triggers
  clearTimeout(errorTime);

  if (inputEl.value <= 0) {
    resultEl.innerText = ""; // Clear result if input is invalid
    errorEl.innerText = "Please enter valid number!";

    errorTime = setTimeout(() => {
      errorEl.innerText = "";
      inputEl.value = "";
    }, 2000);
  } else {
    // 2. Explicitly clear the error message when input is valid
    errorEl.innerText = "";
    resultEl.innerText = (+inputEl.value / 2.2046).toFixed(2);
  }
}

inputEl.addEventListener("input", updateResults);
