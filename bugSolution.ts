function add(a: number, b: number): number {
  return a + b;
}

const result1 = add(1, 2); // Correct: both arguments are numbers
console.log(result1); // Output: 3

const num2 = parseFloat('2');
const result2 = add(1, num2); // Correct: string is converted to a number using parseFloat 
console.log(result2); //Output: 3

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Or handle the error in a more appropriate way
  }

  return numA + numB;
}

const result3 = addSafe(1, '2');
console.log(result3); // Output: 3

const result4 = addSafe('abc', 2); // Output: 0 (or handle error)
console.log(result4); 