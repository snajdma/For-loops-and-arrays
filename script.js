let myVariable = false;
if (myVariable === false) {
  console.log('The condition has been evaluated to true');
};

let a = 28;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
};

let count = 10;
for (let i = 1; i < count; i++) {
    console.log(i*2);
};

console.log("------------");

// Exercise 1

let printNumbersTill = (N) => {
    let count = N;
    for (let i = 1; i <= N; i++) {
        console.log(i);
    }
};

printNumbersTill(15)

// Exercise 2

let getGreetingTo = (name) => {
    return `Hello ${name}`
};

console.log(getGreetingTo("Mark"));

console.log("------------");

// Exercise 1 For loops and arrays

let printValues = (N) => {
    for (let i = 0; i < N.length; i++) {
        console.log(N[i]);
    }
};

printValues([0, 3, 6, 7, 9]);

// Exercise 2 For loops and arrays

let myNumbers = [10, 20, 30, 50, 12];

let printValues2 = (array) => {
    array.forEach(number => {
        console.log(number);
    });
}

printValues2(myNumbers);