function sayHello() {
    console.log("Hello, World!");
}
sayHello();

function cube(num) {
    return num * num * num;
}
console.log(cube(3)); // Output: 27

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
checkEvenOdd(5); // Output: Odd

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(5)); // Output: 120


function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20)); // Output: 30


function largest(a, b, c) {
    return Math.max(a, b, c);
}
console.log(largest(5, 9, 2)); // Output: 9


function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam")); // Output: true


function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log(celsiusToFahrenheit(0)); // Output: 32


function simpleInterest(p, r, t) {
    return (p * r * t) / 100;
}
console.log(simpleInterest(1000, 5, 2)); // Output: 100


function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4])); // Output: [4, 3, 2, 1]


const doubleNumbers = arr => arr.map(num => num * 2);
console.log(doubleNumbers([1, 2, 3])); // Output: [2, 4, 6]


function executeCallback(callback) {
    callback();
}

executeCallback(() => {
    console.log("Callback function executed!");
});
