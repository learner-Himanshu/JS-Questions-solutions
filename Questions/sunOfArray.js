// let result = addFunction([1,2,3,4,5,6,7])
 function addFunction(params) {
    let res= 0;
       params.forEach(element => {
        res= res+element
       });
  return res;   
}

let arr = [1,2,3,4,5,6,7]
let result = addFunction(arr)
console.log(result)

