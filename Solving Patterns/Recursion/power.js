// qn: x power of y | x^y


function powerNum(x,y) {
    if (x == 0 ) return 1;
    if (y == 0 ) return 1;
    if (y == 1 ) return x;
    let ans = 1
    function power(x,y) {
        if (y!==0){
            ans = ans * x
            y-=1
            power(x,y)
        }
        return ans
    }
    power(x,y)
    return ans
    
}
console.log(powerNum(3,3))