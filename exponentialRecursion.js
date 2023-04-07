// simple program that shows exponent result
function exponential(a,b){      
    console.log(a ** b);
}      

// simple iterative code that shows exponent result
function exponentialDiff(a, b){
    for (let i=0; i <= b; i++){
        console.log (a**i);
    }
}

// recursive code that shows exponent result
let i = 0;
let result = 1;
// recursive code that shows exponent result
function exponentialRecursive(a,b){
       if (i == b) {
        return result
       }else{
        i += 1
       }
    result = result * a
    console.log(result)
    // console.log(a,b)
    exponentialRecursive(a, b)
}
// exponentialDiff(2,5)
exponentialRecursive(2,5)

// say = 2 *2 *2 *2 *2