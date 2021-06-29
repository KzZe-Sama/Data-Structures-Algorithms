function prod_array(arr) {
    if (arr.length === 0) return null;
    let ans = 1
    function itr_array(arr) {
        if (arr.length !==0){
            ans = ans*arr[0]
            itr_array(arr.slice(1))     
        }
    }
    itr_array(arr)
    return ans
}
console.log(prod_array([1,2,3,5]))