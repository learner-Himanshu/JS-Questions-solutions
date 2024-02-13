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
// fibonacci(10);


// printing all the fibonacci numbers less then 100


 function fibo(limit){
    let fv= 0;
    let sv=1;
    let nv=fv+sv;
    if(limit===0){
        return 0;
    }else {console.log(fv);}

    if(limit===1){return 1} else{
        console.log(sv);
    }
  
    
    for(let i=2; i<=limit; i++){
        if(nv<limit){
            console.log(nv)
        }
          fv=sv;
          sv=nv;
          nv=fv+sv;
    }

 }

 fibo(50)