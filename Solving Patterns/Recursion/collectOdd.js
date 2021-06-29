function collectOdd(arr){
    let result = []
    
    function main(arr) {
        if (arr.length === 0) return;

        if (arr[0]%2 !== 0) {
            result.push(arr[0])
        }
        main(arr.slice(1))
    }
    main(arr)
    return result
}

console.log(collectOdd([1,2,3,4,5,6,7,8]))
