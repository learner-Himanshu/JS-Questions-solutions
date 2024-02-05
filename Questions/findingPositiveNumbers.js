function positiveValues(array){
    return array.filter(val => val>=0)
}
let result = positiveValues([-1,2,3,-4,-5,5,6,-6])
console.log(result);