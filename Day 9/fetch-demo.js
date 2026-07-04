async function getUser(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let user = await response.json();
        console.log(user.name);
        console.log(user.email);
    } catch (error){
        console.log("出错了:",error);
    }
}

getUser();