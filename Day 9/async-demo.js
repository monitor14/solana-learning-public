function delay(){
    return new Promise(resolve=>{
        setTimeout(() =>{
            resolve("3秒到了!");
        }, 3000);
    });
}

async function run(){
    console.log("开始...");
    let result = await delay();
    console.log(result);
    console.log("结束");
}

run();