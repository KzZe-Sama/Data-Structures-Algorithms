function checkZero(arr){
    let left = 0;
    let right = arr.length-1;
    let results = []
    while (left<right){
        let sum = arr[left] + arr[right]
        if ( sum === 0){
            return([arr[left],arr[right]])
        }
        else if(sum > 0){
            right --;
        }
        else {
            left ++;
        }
    }
    return results

}
console.log(checkZero([-3,-2,-1,0,1,2,7,8]))