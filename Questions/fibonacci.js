// printing n fibonacci numbers 

function fibonacci(n){
        let fibonacciNumbers = [0,1]
         
        for(let i=2; i<n; i++){
            fibonacciNumbers[i] = fibonacciNumbers[i-1]+fibonacciNumbers[i-2];
            // console.log(fibonacciNumbers[i])
        }

        for(let j=0; j<fibonacciNumbers.length; j++){
        console.log(fibonacciNumbers[j]);
        }
}
fibonacci(10);