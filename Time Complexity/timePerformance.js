    
    byLoop = (n) =>{
        let result = 0;
        for (let i=1;i<=n;i++){
            result +=i;
        }
        return result
    }

    byFormula = (n) =>{
        let result = n * (n+1)/2
        return result
    }

let t1 = performance.now()
console.log(byFormula(10000000000))
let t2 = performance.now()
console.log(`Time Taken :${(t2-t1)/1000}`)