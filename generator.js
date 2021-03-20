// generator : 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
// next(), return(), throw() 가지고 있음
// iterable - 반복이 가능하다.
// 값을 미리 만들어 두지 않음.
/*
    다른 작업을 하다가 다시 돌아와서 next()해주면 진행이 멈췄던 부분
    부터 이어서 실행한다.
*/



function* fn(){
    /*
    try{
        console.log(1);
        yield 1;
        console.log(2);
        yield 2;
        console.log(3);
        console.log(4);
        yield 3;
        return "finish";
    }catch(e){
        console.log(e);
    }
    */

    /*
    yield 4;
    yield 5;
    yield 6;
    */

    const num1=yield "첫번째 숫자를 입력해주세요";
    console.log(num1);

    const num2=yield "두번쩨 숫자를 입력해주세요.";
    console.log(num2);

    return num1+num2;

    /*  r값을 미리 만들어두지 않는다.*/
    // let index =0;
    // while(true){
    //     yield index++;
    // }

}

const a =fn();

function* gen1(){
    yield "W";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function* gen2(){
    yield "Hello, ";
    yield* gen1();
    yield "!";
}