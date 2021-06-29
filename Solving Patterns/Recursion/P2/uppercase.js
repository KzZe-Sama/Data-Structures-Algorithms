function ucase(arr) {
    if (arr.length === 0) return [];
    let result = [];

    function main(arr) {
        if (arr.length !==0){
            result.push(arr[0].toUpperCase());
            main(arr.slice(1));
        }
        
    }
    main(arr);
    return result
    
}

console.log(ucase(["a","b","V","d"]));