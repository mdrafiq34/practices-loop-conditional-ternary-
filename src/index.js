
const number = 6;
const result = number % 4; // 2 

//Using if...else

const newNumber = prompt("Enter a number: ");

if( number % 2 == 0) {
    console.log("The number is even.");
}

else {
    console.log("The number is odd.");
}

//Using Ternary Operator


const number_2 = prompt("Enter a number: ");

const result_2 = (number % 2  == 0) ? "even" : "odd";

console.log(`The number is ${result_2}.`);


const number_3 = parseInt(prompt('Enter an integer: '));

const range = parseInt(prompt('Enter a range: '));

for(let i = 1; i <= range; i++) {
    const result_3 = i * number;
    console.log(`${number_3} * ${i} = ${result_3}`);
}

//heck Prime Number

const number_4 = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number_4} is a prime number`);
    } else {
        console.log(`${number_4} is a not prime number`);
    }
}

else {
    console.log("The number is not a prime number.");
}