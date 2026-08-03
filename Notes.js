// Java script -->
// Variables -->
// Data types --> 
// operators --> conditional , mathmatical, logical
// String & its method
// Loops
// Array & its method
// functions
// Callback function
// promises
// Async await
// DOM


// Javascript --> used to write logic and functinality to a web page. with the help of js you can create dynamic website. first name of js was MOCHA. later it was name as Live script. currently it is named as ECHMA script. current version of js is (ES6)

// before Node js, js was used for client side only(used to create frontend only). because Js code runs on browser (browsers have js engine that run your js code).for example in Chrome the name of Js engine is V8

// with the help of node js you can run your js code outside the browser(it uses the same V8 engine that chrome uses);


// Variables --> are used to store the data or value;

// How to decleare a variable in JS --> using let , var ,const
// difference b/w let var and const --> 

// let -->  in case of let you can not redeclare , but can reassign
    // let x = 10
    // let x = 5;
    // console.log(x)  //output -->error

    // let x = 10
    //  x = 5;
    // console.log(x)  // output --> 5

  

// Var  --> can be redeclare ,  and reassign both
    // var x = 10;
    // var x = 11;
    // console.log(x) //output --> 11

    // var x = 10;
    //      x = 11;
    // console.log(x) // output --> 11


// Const -->  can not redeclare ,  or reassign
    // const x = 10;
    // const x = 44;
    // console.log(x)

    // const x = 10;
    //     x = 44;
    // console.log(x)





//3) Data types --> Pritive and Non Primitive
// a) Primitve --> can store single value only example --> Number, String, boolean, undefined , null
        // let x = 10; //correct number
        // // let y = 10, 11 // wrong

        // let a = "hello";  // string
        // // let a = "hello", "bye bye" //wrong string
        // console.log(typeof x)
        // console.log(typeof a)

    // undefined -- >when a variable is decleared but its value is not assigned Js will give undefined
        // let x;
        // console.log(x)  // undefined

    // Null  --> it is a user defined value that is equal to nothing


// Non-primitive --> can store collection of data --> example --> Array, Object, function

// Array --> can store collection of data in indexing form
//  index --> 0     1         2     3
    // let x = [10 , "hello" , true, "bye bye"]
    // console.log(x)
    // console.log(x[2])

    // let data = ["john" , 55 , 65 , "fullstack"];


// Object -->  can store collection of data in key and value form

    // let data = {
    //     name:"john",
    //     age:55,
    //     marks:65,
    //     course:"fullstack"
    // }

    // console.log(data)
    // console.log(data.course) // fullstack
    // console.log(data['course']) // fullstack

    let user  = {
        name:"one",
        email:"one@gmail.com",
        languages:['hindi', 'english', 'spanish'],
        details:{
            houseNo:10,
            city:"lucknow"
        }
    }

    let arr = [10 , true , {name:"one", age:45} , [4, 5, 6]]; 
    console.log(arr[3]) //[4, 5, 6]
    console.log(arr[3][1]) // 5
    console.log(arr[2]) //{name:"one", age:45}
    console.log(arr[2].age) //45

    