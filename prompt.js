let a = Number(prompt("Enter the First value"));
// Check a value:
if (isNaN(a)) {
  alert("First value is invalid.");
} 
else {
  // Only ask for 'b' if 'a' is valid
  let b = Number(prompt("Enter the Second value"));

  while (isNaN(b)) {
    // If 'b' is not a valid number, prompt again
    b = Number(prompt("Invalid input! Please enter a valid number for the Second value"));
  }
  
  function arithmetic_process(a, b) {
   
    let sum = a + b;
    let diff = a - b;
    let mul = a * b;
    let div = a / b;
    let modulo = a % b;
    console.log(`First value entered: ${a}`);
    console.log(`Second value entered: ${b}`);
    console.log(`Result of Addition: ${sum}`);
    console.log(`Result of Difference: ${diff}`);
    console.log(`Result of Multiplication: ${mul}`);
    console.log(`Result of Division: ${div}`);
    console.log(`Result of Modulo Division: ${modulo}`);
  }
  arithmetic_process(a, b);
}

