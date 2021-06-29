function search(string,pattern) {
    let total = 0
    for(var index in string){
        if (string[index] === pattern[0]){
            let check = string.slice(Number(index),Number(index)+Number(pattern.length))
            if (check === pattern) total+=1
        }
    }
    
    return total
}
console.log(search("baowomgowoefwuifwiufwifuwfiuibwfowo","owo"))
