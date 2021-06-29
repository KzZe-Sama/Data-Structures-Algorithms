// Binary Search Algorithm only works for sorted array
//Time complexity : O(log n)
// double the elements double the steps
/* suppose to search in 16 elements it required 4 steps 
for 32 it would require 1 more extra step*/
function binarySearch(arr,item) {
    if (arr.length === 0 ) return -1;
    let start = 0 ;
    let end = arr.length - 1;

        let middleItemIndex = Math.floor((start+end)/2);

        while (arr[middleItemIndex] !== item && start<=end){
            if (item<arr[middleItemIndex]) end = middleItemIndex - 1;
            else start = middleItemIndex + 1;
            middleItemIndex = Math.floor((start+end)/2);

        }
        // Ternary operation returns if found else -1
        return arr[middleItemIndex] === item ? middleItemIndex: -1
        
    

    
}

console.log(binarySearch([2,5,6,9,13,15,28,30], 13))