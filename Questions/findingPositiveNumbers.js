// function positiveValues(array){
//     return array.filter(val => val>=0)
// }
// let result = positiveValues([-1,2,3,-4,-5,5,6,-6])
// console.log(result);

// ==============>


function posiVal(arr){
    let positiveArray=[];
for(let val =0; val<arr.length; val++){
    if(arr[val]>=0){
        positiveArray.push(arr[val])
    }
}
return positiveArray;
}

console.log(posiVal([-1,1,0,-3,-5,3,5,-9,8])) 

