const arr1 = [2, 2, 2]
const arr2 = [2, 2, 2]

function arrayPlusArray(arr1, arr2) {
    let sum = 0
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i]
    }


    let sum1 = 0
    for (let j = 0; j < arr2.length; j++) {
        sum1 += arr2[j]
    }

    return sum + sum1;
}

console.log(arrayPlusArray(arr1, arr2));