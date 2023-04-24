// Create two arrays of numbers
let numbers1 = [1, 2, 3, 4];
let numbers2 = [5, 6, 7, 8];

// Use spread operator to create array called numbers tha combines elements of defined arrays
const numbers = [... numbers1, ...numbers2];

// console.log(numbers)

// create arrow function called square that accepts a number as argument and returns square fo number
let square = (x) => x**2

// console.log(square(2))

// use map method to create a new array called squares that contains squares of numbers array
let squares = numbers.map(square)

// console.log(squares)


// define arrow function isEven that accepts a number and returns true if even or false if not
let isEven = (y) => {
    if (y % 2 == 0) {
        return true;
    } else{
        return false;
    }
}

// console.log(isEven(4))
// console.log(isEven(5))

// use filter method to create a new array called even squares that contains only the even squares from the squares array
let evenSquares = squares.filter(isEven)
// console.log(evenSquares)

// destructuring assignment to extract the 1st and 2nd elements of the even Squares array into constants firstEvenSquare and secondEvenSquare
const [a, b, ...args] = evenSquares
const firstEvenSquare = [a]
const secondEvenSquare = [b]
// console.log(firstEvenSquare)
// console.log(secondEvenSquare)


// use template literal to log the original numbers array, the squares array, the evenSquares array and the extracted even squares.
console.log (`The original numbers were ${numbers}. The square of these numbers are ${squares}. The even numbers of the squares were ${evenSquares}. The first two values of the even squares are ${firstEvenSquare} and ${secondEvenSquare}.`)