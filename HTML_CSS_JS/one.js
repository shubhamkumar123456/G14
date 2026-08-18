// console.log("hello")

// Scope  --> limitation(lifeline) of a variable inside any area
// a)block scope   -->   {}
// b) functional Scope -->  function (){  }


// --> let ans const are block scoped (can not access outside the block 
// var --> var is not block  scoped
// let x = 10;

// if(x > 5){
//     let y = 3;
// }

// console.log(y)  //

// let x = 10;

// if(x > 5){
//     var y = 3;
// }

// console.log(y)  //



//  --> let  , var and const all are functional scoped (can not be access outside the function)

function xyz(){
    var x = 10
    return x
    // return [x, y]
    // return {name:x , age:y}
    console.log("hello")
}

let ans = xyz() //x -->10
console.log(ans)

// console.log(x)