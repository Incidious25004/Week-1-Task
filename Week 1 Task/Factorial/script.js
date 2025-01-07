function validateInput(value) {
  const number = parseInt(value, 10);
  if (isNaN(number) || number < 0) {
    return null;
  }
  return number;
}

function calculateFactorialIterative(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

function calculateFactorialRecursive(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * calculateFactorialRecursive(num - 1);
}

function displayResult(input, method, result) {
  const output = document.getElementById("output");
  output.innerHTML = `
        <p><strong>Number:</strong> ${input}</p>
        <p><strong>Method:</strong> ${method}</p>
        <p><strong>Result:</strong> ${result}</p>
    `;
}

const iterativeButton = document.getElementById("calculateIterative");
const recursiveButton = document.getElementById("calculateRecursive");

iterativeButton.addEventListener("click", () => {
  const input = document.getElementById("numberInput").value;
  const number = validateInput(input);
  if (number !== null) {
    const result = calculateFactorialIterative(number);
    displayResult(number, "Iterative", result);
  } else {
    alert("Please enter a valid positive integer.");
  }
});

recursiveButton.addEventListener("click", () => {
  const input = document.getElementById("numberInput").value;
  const number = validateInput(input);
  if (number !== null) {
    const result = calculateFactorialRecursive(number);
    displayResult(number, "Recursive", result);
  } else {
    alert("Please enter a valid positive integer.");
  }
});
