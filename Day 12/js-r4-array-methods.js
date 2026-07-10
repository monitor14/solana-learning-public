const balances = [
  { address: "Alice", lamports: 5000 },
  { address: "Bob", lamports: 3000 },
  { address: "Charlie", lamports: 8000 },
];

console.log(balances.map(b=>b.lamports/1_000_000_000));
console.log(balances.filter(b=>b.lamports > 4000));
console.log(balances.find(b => b.address === "Bob"));