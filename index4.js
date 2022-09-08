
// f1();

 var f1=function (a,b){
    console.log(arguments)
    console.log("this is function")
}
f1(2,3);

// 

function func1(){
    let x=0;
 function   func2(){
    if(x==0){

        console.log(`you called me first time`)
        x++;
    }
    else{
        console.log(`you already call me ${x} times`)
        x++;
    }
    }
    return func2;
}
const ans=func1();
ans()
ans()
ans()
ans()
ans()
