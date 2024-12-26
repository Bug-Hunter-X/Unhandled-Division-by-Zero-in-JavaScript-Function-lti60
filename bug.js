function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Incorrect: should handle division by zero
  }
  return a / b; 
}