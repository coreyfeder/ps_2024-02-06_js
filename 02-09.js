/* 
Exercise
https://ps-react-curriculum.herokuapp.com/308/3/lesson/#exercise-1

Write while loops to accomplish the following tasks:
 */

// ensure we start with an integer
// i -= (i & 1)
// oh, nm, ofc we have libraries. use Math.floor().


// 1. Count down to 0 from a given number.
console.log(`\n1. Count down to 0 from a given number.`)
let i1;
const const1 = 20;
i1 = const1;
while (i1 >= 0) console.log(i1--);


// 2. Log integers in multiples of 3 as long as they are less than 35.
console.log(`\n2. Log integers in multiples of 3 as long as they are less than 35.`)
const const2 = 35;
let i2 = 0;
while (i2 < const2) if (i2 % 3 == 0) console.log(i2++);
console.log();

let i2b = 0; 
while (i2b < const2) if (i2b % 3 == 0) console.log(i2b++); else { i2b++; };
console.log();


// 3. Print integers in multiples of 5 as long as they are less than 100.
console.log(`\n3. Print integers in multiples of 5 as long as they are less than 100.`)
const const3 = 100;
let i3 = const3;
// malicious compliance
while (true) console.log(i3-=5);


// 4. Print integers between 0 and 20 with the following conditions:
//  - All numbers divisible by 2 should be multiplied by 3 before they are output.
//  - All other integers should not be output.
console.log(`\n4. Print integers between 0 and 20 with the following conditions:`);
console.log(` - All numbers divisible by 2 should be multiplied by 3 before they are output.`);
console.log(` - All other integers should not be output.`);
let i4 = 0;
// if ((i4 & 1) != 0) i4++;
while ((i4+=2) < 20) console.log(/* ${i4} gives us */ `${i4*3}`);

// 5. Print all prime numbers between 0 and 20.
// 5a. Print all prime numbers between `start` and `end`.
let i5;
let start = 0;
let end = 20;
let primes = [];
// let's go in ascending order
if (end < start) end = [start, start = end][0];  // reverse start and end if necessary
// By definition, prime numbers must be positive integers.
if (start < 1) {
    start = 1;  // make sure it's positive
} else {
    start = Math.ceil(start);  // go to the next integer
};
if (end < 1) {
    end = 1;  // make sure it's positive
} else {
    end = Math.floor(end);  // take the highest integer represented
};
i5 = start;
while (i5 < end) {
    // base cases
    if (i5 == 1) console.log(i5++);
    else if (i5 == 2) {
        primes = [2];
        console.log(i5++);
    } else {
        let possiblyPrime = true;
        for (let previousPrime of primes) {
            if (previousPrime ** 2 > i5) {
                // the greatest factor a number can have is its square root
                break;
            };
            if (i5 % previousPrime == 0) {
                possiblyPrime = false;
                break;
            };
        };
        if (possiblyPrime) {
            primes.push(i5);
            console.log(i5);
        };
        i5 += 2;
    };
};
primes = [1].concat(primes);

/* 
Bonus Logical Question
Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

Write a loop that outputs how many quarters Romeo received.
 */

const cashTendered = 10.0;
const stupidlyExpensiveCookiePrice = 4.0;
const quartersPerDollar = 4;

let changeOwed = cashTendered - stupidlyExpensiveCookiePrice;
let quartersOwed = (Math.round(cashTendered - stupidlyExpensiveCookiePrice) * quartersPerDollar);
// change the machine owes that is not dispensable in quarters...it keeps. tough luck, Romeo.
quartersOwed = Math.floor(quartersOwed)

let quartersDispensed = 0;
while (quartersOwed > 0) {
    quartersDispensed++;
    console.log(`clink.`);
    quartersOwed--;
};
console.log(`${quartersDispensed} quarters dispensed.`);
// Hopefully it will say "24"