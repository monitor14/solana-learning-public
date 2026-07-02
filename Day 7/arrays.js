let tokens = ["SOL","BTC","ETH","USDC","JUP"]

console.log(tokens[0]); // 猜想 SOL
console.log(tokens[tokens.length-1]); // 猜想 JUP
console.log(tokens.length); //猜想 5


tokens.push("RAY")
console.log(tokens); // 猜想 "SOL","BTC","ETH","USDC","JUP","RAY"

tokens.pop();
console.log(tokens); // 猜想 "SOL","BTC","ETH","USDC","JUP"]

tokens.shift();
console.log(tokens); //猜想  "BTC","ETH","USDC","JUP"

tokens.unshift("SOL");
console.log(tokens); //猜想 "SOL","BTC","ETH","USDC","JUP"