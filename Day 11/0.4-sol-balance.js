async function getBalance(){
    try{
        let response = await fetch("https://api.devnet.solana.com",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                "jsonrpc": "2.0",
                id:1 ,
                method: "getBalance",
                params:[
                    "83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri",
                {"commitment": "finalized"}
                ]

            })
        }); 
         let data = await response.json();
         console.log("Lamports:",data.result.value);
         console.log("SOL:" , data.result.value / 1_000_000_000);

    }catch(error){
        console.log("出错了:" ,error);
    }

}
getBalance();