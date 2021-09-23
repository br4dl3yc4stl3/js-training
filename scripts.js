function add7() {
    let x = parseFloat(prompt("Enter Number: ", ""));
    let result = x + 7;
    console.log(result);
}

function multiply() {
    let x = parseFloat(prompt("Enter Number: ", ""));
    let y = parseFloat(prompt("Enter Number: ", ""));
    let result = x * y;
    console.log(result);
}

function capitalize() {
    let word = prompt("What's your word: ", "");
    let result = word[0].toUpperCase() + word.slice(1).toLowerCase();
    console.log(result);
}

function lastLetter() {
    let word = prompt("Give me a word please: ", "");
    let result = word.slice(word.length - 1);
    console.log(result);
}

function fizzBuzz() {
    let number = parseInt(prompt("Enter your number: ", ""));
    for (let i = 1; i <= number; i++)  {
        if (i % 3 === 0) {
            console.log("Fizz");
        }  
        if (i % 5 === 0) {
            console.log("Buzz")
        }
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        }
        else {
            console.log(i);
        }
    }
}