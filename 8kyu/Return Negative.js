// ❓DESCRIPTION 
// В этом простом задании вам дается число, 
// и вы должны сделать его отрицательным. 
// Но, может быть, число уже отрицательное?

//💥TEST
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// ✅SOLUTION
function makeNegative(num) {
    if (num > 0) {
        return -num
    } else {
        return num
    }
}

console.log(makeNegative(-6));

// ❗Variant №2❗

// function makeNegative(num) {
//     return num > 0 ? -num : num;
// }