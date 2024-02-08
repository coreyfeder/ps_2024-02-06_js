// Logs odd numbers from 1 to 10
/* 
console.log("Odds 1 to 10:");
for(let i = 1; i < 10; i+=2) {
    console.log(i);
};

console.log("Odds 0 to 10:");
for(let i = 0; i < 10; i += 2) {
    if (i & 1) ; else ++i;
    console.log(i);
};

// Output multiples of 3, starting at 6 and ending at 60
for(let i = 6; i <= 60; i += 3) { console.log(i); };
for(let i = 6/3; i <= 60/3; i++) { console.log(i*3); };
for(let i = 0; i <= 60; i++) { (i >= 6) && !(i % 3) && console.log(i); };
for(let i = 6; i <= 60; i++) { !(i % 3) && console.log(i); };
let i=6; while()

for(let i = 6; i <= 60; i++) {
    !(i % 3) && console.log(i);
};

for (let i=0, i<=20, i++) {
    console.log(`i: ${i}; i%3: ${i%3}; truthiness: ${(i%3 == true)}`);
};


// Output an increasing number of # symbols, from 1 to 7
for(let i=1; i<=7; i++) { console.log('#'.repeat(i)); };
for(let msg='#'; msg.length<=7; msg+='#') {
    console.log(hashes);
};

for(let msg='#'; msg.length<=7; ) {
    msg+='#';
    console.log(msg);
};

for(
    let msg='';
    msg.length<=7;
    console.log(msg+='#')
    ) {
        // nothing in the loop
    };
    
for(let hashes='#'; hashes.length<=7; hashes+='#') { console.log(hashes);};
    
    
    
// Outer Scope, maybe Global Scope
// Things declared here exist outside the loop, and 
// they'll continue to exist after the loop is done.
// If that's not what you want, don't make a mess out here.

for(
    ...; // Loop Scope
    // Executed once.
    // Declarations made here persist until the loop is finished.
    ...; // Evaluated each iteration.
    ...; // Executed each iteration.
    ) {
        // Iteration Scope
        // Executed each go-through.
        // New variables made here only exists for this go-through.
        // Variables that exist OUTSIDE this iteration can be CHANGED.
    };
*/


//     if (i == 1) {
    //         console.log("even");
    
    //     }
    //     (i==2) && { console.log("even"); continue; };
    //     console.log(primes)
    //     switch (i) {
        //         case 0:
        //             console.log("You're not supposed to be here, Zero.");
        //             continue;
        //         case 1:
        //             console.log(`${i}: odd`);
        //             continue;
        //         case 
        //     }
        // }
        
/* 
for (let i=1, primes=[]; i<=20; i++) {
    // console.log(`\nChecking ${i}:`)
    if (i == 1) {
        // console.log(`  Base case.`)
        console.log(`1: odd, and mysteriously not prime`);
    } else if (i % 2 == 0) {
        // console.log(`  Even.`)
        console.log(`${i}: even`);
    } else {
        // console.log(`  Odd...but is it prime? Let's try dividing it by the earlier primes.
        // console.log(`    current i = ${i}; current primes = ${primes}`)
        let maybeprime = true;
        for (let j of primes) {
            // console.log(`  checking i % j -> ${i} % ${j} -> ${i%j}`)
            if (i % j == 0) {
                // console.log(`  Nah, ${i} isn't prime.`)
                maybeprime = false;
                break;
            };
        };
        if (maybeprime) {
            primes.push(i);
            console.log(`${i}: odd and prime`);
        } else {
            console.log(`${i}: odd`);
        };
    };
    // console.log(` (end state: i=${i}, primes=${primes})`)
};
 */

/* for (let i=1, primes=[]; i<=20; i++) {
    // console.log(`\nChecking ${i}:`)
    if (i == 1) {
        // console.log(`  Base case.`)
        console.log(`1: odd, and mysteriously not prime`);
    } else if (i % 2 == 0) {
        // console.log(`  Even.`)
        console.log(`${i}: even`);
    } else {
        // console.log(`  Odd...but is it prime? Let's try dividing it by the known primes.
        // console.log(`    current i = ${i}; known primes = ${primes}`)
        let maybeprime = true;
        for (let j of primes) {
            // console.log(`  checking i % j -> ${i} % ${j} -> ${i%j}`)
            if (i % j == 0) {
                // console.log(`  ${i} is divisible by ${j}; not prime.`)
                maybeprime = false;
                break;
            };
        };
        if (maybeprime) {
            primes.push(i);
            console.log(`${i}: odd and prime`);
        } else {
            console.log(`${i}: odd`);
        };
    };
};
 */

// console.log("(all primes inherently odd.)")
for (let i=1, primes=[3]; i<=20; i++) {  // change i++ to i+=2 if not printing evens.
    // console.log(`\nChecking ${i}:`)
    if (i == 1 | i == 3) {
        // console.log(`  Base cases.`)
        console.log(`${i}: odd`);
    } else if (i % 2 == 0) {
        // Evens, and the base case 2.
        console.log(`${i}: even`);
    } else {
        // console.log(`  Odd...but is it prime? Let's try dividing it by the known primes.
        // console.log(`    current i = ${i}; known primes = ${primes}`)
        let maybeprime = true;
        for (let j of primes) {
            // console.log(`  checking i % j -> ${i} % ${j} -> ${i%j}`)
            if (i % j == 0) {
                // console.log(`  ${i} is divisible by ${j}; not prime.`)
                maybeprime = false;
                break;
            };
            if (j ^ 2 >= i) {
                // the greatest factor a number can have is its square root
                break;
            };
        };
        if (maybeprime) {
            primes.push(i);
            console.log(`${i}: prime & odd`);
        } else {
            console.log(`${i}: odd`);
        };
    };
};
