// Time Complexity : O(n)
// Space Complexity : O(1)

function search(arr,value) {
    for(var data of arr){
        if (data == value){
            return `${value} found at index: ${arr.indexOf(data)}`;
        }
    }
    return -1;
    
}
console.log(search([1,2,3,4,5,6,7,7],4))