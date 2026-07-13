const wallet = {
  owner: "Alice",
  account: {
    address: "83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri",
    balance: {
      lamports: 1464737722001,
      sol: 1464.737722001,
    },
  },
};

console.log(wallet.owner);
console.log(wallet.account.address);
console.log(wallet.account.balance.sol);
console.log(wallet.profile?.twitter);