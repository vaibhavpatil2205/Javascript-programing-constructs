const readline = require("prompt-sync");
const prompt=readline();

function palindrome(num1){
     while( num1 > 0) {
            lastDgit = (num1 % 10);
            console.log("la"+lastDgit);
            reverse = (reverse * 10) + lastDgit;
            console.log("re"+reverse)
            num1 = Math.floor(num1 / 10);
            console.log("n"+num1)
     }
     console.log("Reverse of the first number: "+reverse);
}

let num1 = prompt("Enter the 1st Number : ");
let num2 = prompt("Enter the 2nd Number: ");

let reverse=0;
let lastDgit=0;

palindrome(num1)
if( num2 == reverse) {
       console.log("Numbers are Palindrome");
}
else {
       console.log("Numbers are not Palindrome");
}