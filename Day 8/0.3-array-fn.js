function countGreaterThanTen(numbers){
    let count = 0 ;
    for (let num of numbers){
        if (num > 10){
            count++;
        }
    }
    return count;
}

let scores = [5,12,8,20,3,15,10];
console.log(countGreaterThanTen(scores)); // 猜想 3
