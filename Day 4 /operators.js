let a = 10;
let b = 3 ;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

let firstName = "Solana";
let lastName = "Learner";
console.log(firstName+" "+lastName);


function checkScore(score){
    if (score >= 90){
        return "A";
    } else if (score >= 60){
        return "Pass";
    }else {
        return "Fail";
    }
}
console.log(checkScore(95));
console.log(checkScore(70));
console.log(checkScore(40));
