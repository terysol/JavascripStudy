// let userList=[
//     {name:"Mike", age:30},
//     {name:"Jane", age:27},
//     {name : "Tom",age:10},,
// ];

// let newUserList=userList.map((user,index)=>{
//     return Object.assign({},user ,{
//         id:index+1,
//         isAdult:user.age>19,
//     });
// });


// let arr=[27,8,5,13];

// arr.sort((a,b)=>{   // lodash.com
//     return a-b;
// });


// let arr1=[1,2,3,4,5];

// const result=arr1.reduce((prev,cur)=>{
//     return prev+cur;
// },0);   // 0은 초기값


// let userList=[
//     {name:"Mike",age:30},
//     {name:"Tom",age:10},
//     {name:"Jane",age:26},
//     {name:"Sue",age:19},
// ]

// let result=userList.reduce((prev,cur)=>{
//     if(cur.age>19){
//         prev.push(cur.name);
//     }
//     return prev;
// },[]);

// console.log(result);

// function add(...numbers){
//     let result=0;
//     numbers.forEach((num)=>(result+=num));
//     console.log(result);
// }

// add(1,2,3);
// add(1,2,3,4,5,6,7,8,9,10);

function User(name,age, ...skill){
    this.name=name;
    this.age=age;
    this.skill=skill;
}

const User1=new User('Mike',30,'html','css');
const User2=new User('Tom',30,'JS','React');

console.log(User1);
console.log(User2);