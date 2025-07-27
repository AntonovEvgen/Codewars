// Завершите решение так, чтобы оно изменило направление 
// переданной в него строки.

function solution(str) {
    let reverseStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr
}

console.log(solution("hello"));