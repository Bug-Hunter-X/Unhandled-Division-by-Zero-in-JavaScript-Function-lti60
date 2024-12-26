function foo(a, b) {
  if (b === 0) {
    return Infinity; // Or throw an error: throw new Error('Division by zero');
  }
  return a / b; 
}