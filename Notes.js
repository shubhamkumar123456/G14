// Java script -->
// Variables -->
// Data types --> Primitive  & non-primitive
// operators --> conditional , mathmatical, logical
// String & its method
// Array & its method

// Loops
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

    // let user  = {
    //     name:"one",
    //     email:"one@gmail.com",
    //     languages:['hindi', 'english', 'spanish'],
    //     details:{
    //         houseNo:10,
    //         city:"lucknow"
    //     }
    // }

    // let arr = [10 , true , {name:"one", age:45} , [4, 5, 6]]; 
    // console.log(arr[3]) //[4, 5, 6]
    // console.log(arr[3][1]) // 5
    // console.log(arr[2]) //{name:"one", age:45}
    // console.log(arr[2].age) //45

// https://github.com/shubhamkumar123456/G14


// ***********************************************************************************
// String & its methods --> "" , '' , ``

// let firstName = 'john';
// let lastName = "Xyz";
//                 // 'john' + "Xyz"
// let fullName = firstName+" " + lastName  //  "john Xyz"
// console.log(fullName)//  "johnXyz"

// let ans = `${firstName} ${lastName}`;
// console.log(ans)

// 1) length method & charAt method --> 
        // let text = "hello how are you" //
        // console.log(text.length)//17
        // console.log(text[4])  // o
        // console.log(text.charAt(4))  //o

// 2) toUpperCase and toLowerCase -->
    // let text = "hello how are you" //
    // console.log(text.toUpperCase())//HELLO HOW ARE 
    
// 3)Slice method --> can cut or copy a portion from a string and return a new string(it do not change in original string)
    // Syntax --> Slice(startIndex , EndIndex), end will always cut 1 less
        // let text = "hello how are you" //
        // let ans = text.slice(6, 13)
        // console.log(ans)

// Split method --> can convert an String into an array;
    // let text = "hello how are you" //
    // [ "hello how are you" ]
    // ["hello" , "how" , "are" , "you"]
    // ["h", "e", "l", "l", "o"," ", "h" ....]

    // let ans  = text.split();  //['hello how are you']
    // console.log(ans)  

    // let ans1 = text.split(" ");//['hello', 'how', 'are', 'you']
    // console.log(ans1)

    // let ans2 = text.split(''); //
    // console.log(ans2) //['h', 'e', 'l', 'l', 'o', ' ', 'h', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u']

// Includes Method --> can search anything in string and return boolean value
//  let text = "hello how are you" //
//  console.log(text.includes('you')) // true

// Trim Method -->  removes extra spaces from string
// let text = "             hello how are you        "
// console.log(text.length) //38

// let ans = text.trim()// 
// console.log(ans)  //"hello how are you"
// console.log(ans.length) //17

// replace  --> can replace any value inside string;

// let text = "virat kohli is Virat"

// let ans = text.replace('virat' , 'king');
// console.log(ans)

//  g --> search globally
// i -> insensitive case
// let ans = text.replace(/virat/gi , 'king')
// console.log(ans)


// let text = "hello      all            is       well"//helloalliswell
// let ans = text.replace(/ /g , '');
// console.log(ans)




// Array and its Methods --> 
// a) length --> 
    // let arr = ["hello", 10, "john", "green", true];
    // console.log(arr.length)

//b) push method --> can add an element at the last
    //  let arr = ["hello", 10, "john", "green", true];
    //  arr.push('hii');
    //  console.log(arr)
//b) push method --> can remove an element at the last
    //  let arr = ["hello", 10, "john", "green", true];
    //  arr.pop();
    //  console.log(arr) //['hello', 10, 'john', 'green']

//c) unshift method --> can add an element at the start -->
    //  let arr = ["hello", 10, "john", "green", true];
    //  arr.unshift(11)
    //  console.log(arr) //[11, 'hello', 10, 'john', 'green', true]

// d)shift method --> can remove an element at start
        //   let arr = ["hello", 10, "john", "green", true];
        //   arr.shift()
        //   arr.shift();
        //   console.log(arr) //['john', 'green', true]
        
// e) slice --> can cut or copy a portion from array same as string method

    //   let arr = ["hello", 10, "john", "green", true];
    //   let ans = arr.slice(2 , 4);
    //   console.log(ans)

// f) splice method --> can add or remove element at any place in array
    // splice(startIndex , no of element count you want to remove ,element name you want to add)

    // remove element at any place
    //   let arr = ["hello", 10, "john", "green", true];
    //     arr.splice(2 ,1)
    //     console.log(arr)

    // add element at any place
    // let arr = ["hello", 10, "john", "green", true];
    //     arr.splice(3,0, "apple")
    //     console.log(arr) //['hello', 10, 'john', 'apple', 'green', true]

    // add or remove both or update a value -->
    // let arr = ["hello", 10, "john", "green", true];
    // // arr.splice(1,1,22)
    // // console.log(arr)

    // arr[1]  = 22;
    // console.log(arr)



// 
//   let arr = ["hello", 10, "john", "green", true];
//   for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
//   }

// Ques --> find the name of products whose price is between 15 to 50 thousand
let products = [
    {name:"iphone" , price:44000 , rating:4.5}, // 0
    {name:"samsung" , price:84000 , rating:5}, //1
    {name:"MI" , price:14000 , rating:3},  //2
    {name:"Nokia" , price:24000 , rating:2}, //3
    {name:"x-box" , price:54000 , rating:1}, //4
    {name:"realme" , price:4000 , rating:3.5}, //5
]

for(let i=0 ; i<products.length ; i++){
    // console.log(products[i]) //{}
    if(products[i].price>=15000 && products[i].price<=50000){
        console.log(products[i].name)
    }
}







