function evaluateTransaction(amount, isVerified) {
    if (amount > 0 && isVerified === true ) {
        return "Transaction valid";
    } else if ( amount > 0 && isVerified === false ){
        return "Pending verification" ;
    } else if ( amount === 0 ){
        return "Empty transaction";
    } else {
        return "Invalid amount";
    }
}

console.log(evaluateTransaction(100,true)) // 猜想 Transaction valid
console.log(evaluateTransaction(100, false)); // 猜想 Pending verification 
console.log(evaluateTransaction(0, true)); //  猜想 Empty transaction 
console.log(evaluateTransaction(-50, true)); //猜想 Invalid amount


let amount =100 ;
console.log(amount > 0 ? "Has value" : "No value");
