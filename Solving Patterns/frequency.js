// The pattern focuses on finding the frequency of the two arrays
/* here first array will have n number of numbers and second array
 must have n square with same freq regardless the position*/

 function freq(arr1,arr2) {
    if (arr1.length !== arr2.length){
        return false
    }
    // init frequency counter for the both first and second array :Type Obj
    let fcount1 = {}
    let fcount2 = {}

    for (let n of arr1){
        fcount1[n] = (fcount1[n] || 0) + 1
    }
    for (let n of arr2){
        fcount2[n] = (fcount2[n] || 0) + 1
    }
    
    for (let key in fcount1 ){
        if (!(key**2 in fcount2)){
            return false
        }
        if (fcount2[key**2] !== fcount1[key]){
            return false
        }
    }
    return true
 }

 console.log((freq([1,2,3,4,5],[1,9,16,25,4])))