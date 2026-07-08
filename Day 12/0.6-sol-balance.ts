import  { Connection ,PublicKey,clusterApiUrl} from "@solana/web3.js";

interface BalanceResult {
    address:string;
    lamports: number;
    sol:number;
}
const connection:Connection = new Connection(clusterApiUrl("devnet"),"confirmed");
const publicKey:PublicKey = new PublicKey("83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri");
const balance:number = await connection.getBalance(publicKey);

const result:BalanceResult = {
    address: "83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri",
    lamports:balance,
    sol:balance / 1_000_000_000,
}

// console.log("Lamports:",balance);
// console.log("SOL:",balance /  1_000_000_000);
console.log(result)