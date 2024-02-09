/* 
Exercise
https://ps-react-curriculum.herokuapp.com/308/3/lesson/#exercise-1

Write while loops to accomplish the following tasks:
 */

// ensure we start with an integer
// i -= (i & 1)
// oh, nm, ofc we have libraries. use Math.floor().


// 1. Count down to 0 from a given number.
let i1;
const const1 = 20;
i1 = const1;
while (i1 >= 0) console.log(i1--);

// 2. Log integers in multiples of 3 as long as they are less than 35.
let i2 = 0;
const const2 = 35;
i2 = 0;
while (i2 < const2) if (i2 % 3 == 0) console.log(i2++);

let i3 = 0; 
while (i3 < const2) if (i3 % 3 == 0) console.log(i++); else { i3++; };
console.log(); // 

// 3. Print integers in multiples of 5 as long as they are less than 100.
const const3 = 100;
let i3 = const3;
// malicious compliance
while (true) console.log(i3-=5);

// 4. Print integers between 0 and 20 with the following conditions:
//  - All numbers divisible by 2 should be multiplied by 3 before they are output.
//  - All other integers should not be output.
let i4;
const const4from = 0;
const const4to = 20;
i4 = const4from;
if ((i4 & 1) != 0) i4++;
while ((i4+=2) < const4to) console.log(/* ${i4} gives us */ `${i4*3}`);

// 5. Print all prime numbers between 0 and 20.


/* 
Bonus Logical Question
Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

Write a loop that outputs how many quarters Romeo received.
 */
