// let name = "monitor14";
// let age = 28 ;
// let isOnline =true ;

// console.log(name ,age , isOnline);


// let str ="hello";
// let num = 42;
// let bool =  false;
// let nothing = null ; 

// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof bool);
// console.log(typeof nothing);

// function greet(name){
//     return "hello," + name ;
// }

// let result = greet("Solana");
// console.log(result);

// let globalName = "Solana";
// function sayHi(){
//     let localMsg = "Hi";
//     console.log(localMsg+","+ globalName);
// }

// sayHi();
// console.log(localMsg);

// function greet(name="Guest"){
//     return "Hello," + name;
// }
// console.log(greet("Solana"));
// console.log(greet());


// function checkAge(age){
//     if (age >= 18) {
//         return "成年";
//     }
//     return "未成年";
// }

// console.log(checkAge(20));
// console.log(checkAge(15));

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(i); // 一个素数
  }
}

console.log(showPrimes(10));