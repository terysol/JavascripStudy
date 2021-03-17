class Car{
    constructor(color){
        this.color=color;
        this.wheels=4;
    }

    drive(){
        console.log("drivev..");
    }

    stop(){
        console.log("stop..");
    }
}


// 사용자가 만들어준 생성자가 없으면 기본 생성자가 실행
class Bmw extends Car{
    constructor(color){
        super(color);   // 부모에 있는 생성자를 생성해 줘야함.
        this.navigation=1;
    }
    park(){
        console.log("park..");
    }

    stop(){
        super.stop();   // 부모의 stop()메서드 사용
        console.log("off");
    }
}

const z4=new Bmw("blue");