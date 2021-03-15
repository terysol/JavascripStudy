// const car={
//     wheels:4,
//     drive(){
//         console.log('drive..');
//     }
// };

// const bmw={
//     color:"red",
//     navigation:1,
// };

const Bmw=function(color){
    const c=color;
    this.getColor=function(){
        console.log(c);
    }   // color라는 변수를 함부로 바꿀 수 없음
};

Bmw.prototype.wheels=4;
Bmw.prototype.drive=function(){
    console.log("drive..");
}

Bmw.prototype.navigation=1;
Bmw.prototype.stop=function(){
    console.log("Stop!");
}

const x5=new Bmw("RED");
const z4=new Bmw("bLUE");


// Prototype Chain

// const x5={
//     color:"white",
//     name:"x5"
// };


// bmw.__proto__=car;  // 상속
// x5.__proto__=bmw;