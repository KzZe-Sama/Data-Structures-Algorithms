
 function validAna(word1,word2) {
    if (word1.length !== word2.length){
        return false
    }
    let wordListA = []
    let wordListB = []

    for (word of word1){
        wordListA.push(word)
    }
    for (word of word2){
        wordListB.push(word)
    }
    // console.log(wordListA,wordListB)
    
    for (word of wordListA){
        // console.log(word)
        if (!(wordListB.includes(word))){
            return false
        }
        wordListB.splice(wordListB.indexOf(word),1)
        // console.log(wordListB)

        
    }
    return true

 }
    

 console.log(validAna("timetext","texttime"))