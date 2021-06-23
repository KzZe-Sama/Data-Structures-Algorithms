function unique_values(arr) {
    if (arr.length === 0){
        return 0
    }
    let uniqueList = []
    for (let val of arr){
        let getIndex = uniqueList.indexOf(val)
        if(getIndex === -1){
            uniqueList.push(val)
        }
    }
    return uniqueList.length
}
console.log(unique_values([-2,-1,0,1,2,2,2,2,2,9,99,-2,-22]))