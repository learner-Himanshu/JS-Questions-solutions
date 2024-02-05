function maximumNumber(array){
    let max=0;
    for(let i = 0; i<array.length; i++){
       if(max<array[i]){
        max= array[i]
       }
    }
    return max;
}

console.log(maximumNumber([-1,3,6,8,-9,88]))
