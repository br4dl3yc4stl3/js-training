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