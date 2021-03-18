const pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Ok");
    },1000);
});

console.log("시작");
pr.then((result)=>{
    console.log(result);
})
 .catch((err)=>{
    console.log(err);
 })
 .finally(()=>{
     console.log("끝");
 });

 /*  ---------콜백함수 사용------------------------------*/
//  const f1=(callback)=>{
//      setTimeout(function(){
//          console.log("1번 주문 완료");
//          callback();
//      },1000);
//  };

//  const f2=(callback)=>{
//      setTimeout(function(){
//          console.log("2번 주문 완료");
//          callback();
//      },3000);
//  };

//  const f3=(callback)=>{
//      setTimeout(function(){
//          console.log("3번 주문 완료");
//          callback();
//      },2000);
//  };

//  console.log("시작");
//  f1(function(){
//      f2(function(){
//          f3(function(){
//              console.log("끝");
//          })
//      })
//  })

/*  --------- promise 사용------------------------------*/
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


// promise all
console.time('x');
Promise.all([f1(),f2(),f3()]).then((res)=>{
    console.log(res);
    console.timeEnd('x');
});

// promise.race
console.time('x');
Promise.race([f1(),f2(),f3()]).then((res)=>{
    console.log(res);
    console.timeEnd('x');
});

// console.time("시작");
// f1()
//  .then(res=> f2(res))
//  .then((res)=>f3(res))
//  .then((res)=>console.log(res))
//  .catch(console.log)
//  .finally(()=>{
//      console.timeEnd("시작");
//  })
 // 프로미스가 연결연결 되어 있는 것 -> 프로미스 체인