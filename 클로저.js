// let arr1=[1,2,3];
// let arr2=[4,5,6];

// arr2.reverse().forEach(num=>{
//     arr1.unshift(num);
// });

// arr1=[...arr2,...arr1];

// console.log(arr1);

// let user={name:"Mike"};
// let info={age:30};
// let fe=["JS","React"];
// let lang=["Korean","English"];

// user={
//     ...user,
//     ...info,
//     skills:[...fe,...lang]
// };
 
// console.log(user);

/* 클로저 */
function makeCounter(){
    let num=0;

    return function(){
        return num++;
    };
}

let counter=makeCounter();
console.log(counter());  //0   --> 수정 불가능 
console.log(counter());  //1
console.log(counter());  //2