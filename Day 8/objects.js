let user = {
    name : "Solana Learner",
    age : 25,
    skills: ["JS","Git"],
};

console.log(user.name); // 猜想 Solana Learner
console.log(user.age); //猜想 25
console.log(user.skills[0]); // 猜想JS
console.log(user.isOnline); // undefined

user.skills.push("Node.js");
console.log(user.skills); //猜想 JS,Git,Node.js

user.location="China";
console.log(user);  //猜想 ： 在原先这个对象最后加上  location:China 
