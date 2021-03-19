// async function getName(){
//     return "Mike";
// }

// getName().then((name)=>{
//     console.log(name);
// });

/* await 키워드*/

function getName(name){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(name);
        },1000);
    });
}

async function showName(){
    const result=await getName('Mike');
    console.log(result);
}

console.log("시작");
showName();

/* async와 await로 바꾸어보기 */
const f1=()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("1번 주문 완료");
        },1000);
    });
};

const f2=(message)=>{
    console.log(message);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("2번 주문완료");
            //rej(new Error("err.."));
        },3000);
    });
};

const f3=(message)=>{
    console.log(message);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("3번 주문 완료");
        },2000);
    });
};

console.log("시작");
// async function order(){
//     try{
//         const result1=await f1();
//         const result2=await f2(result1);
//         const result3=await f3(result2);
//         console.log(result3);
//     }catch(e){
//         console.log(e);
//     }
   
//     console.log("종료");

// }

// promise all
async function order(){
        try{
           const result=await Promise.all([f1(), f2(),f3()]);
           console.log(result);
        }catch(e){
            console.log(e);
        }
       
        console.log("종료");
    
    }
order();




