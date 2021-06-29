// gives the factorial of the number inputed

let result = 1
function fact(n) {
    if (n === 0) return 1;
    if (n === 1) return 1;

    if (n>1){
        result = result * n
        n-=1
        fact(n)
    }
    return result
}

console.log(fact(3))