let students= [
    {name:"Alice",score:85},
    {name:"Bob",score:45},
    {name:"Carol",score:72},
    {name:"Dave",score:30},
    {name:"Eve",score:90}
];
function  getPassedStudents(students){
    let passedStudents =[];
    for (let student of students){
        if (student.score >= 60){
            passedStudents.push(student.name)
        }
    }
    return passedStudents
}

console.log(getPassedStudents(students))

//创建一个数组，包含 5 个对象，每个对象有 name 和 score 属性
//写一个函数 getPassedStudents(students)，用 for..of 遍历，返回 score >= 60 的学生名字数组
//用 console.log 打印结果