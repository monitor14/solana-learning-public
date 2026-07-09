// 1. 对象解构
const balanceResult = { address: "83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri", lamports: 1464737722001, sol: 1464.74 };
const {address,sol}=balanceResult;
console.log(address,sol );
 
// 2. 数组解构
const topHolders = ["Alice", "Bob", "Charlie"];
// 用解构取出第一个和第二个
const [first,second] = topHolders;
console.log(first,second);