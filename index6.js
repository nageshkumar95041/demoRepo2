let heading1=document.querySelector(".heading1")
let heading2=document.querySelector(".heading2")
let heading3=document.querySelector(".heading3")
let heading4=document.querySelector(".heading4")
let heading5=document.querySelector(".heading5")
let heading6=document.querySelector(".heading6")

 
function headingChange(x,y){
    x.style.color='red';
    function fun1(y){
        console.log(y)
        // y.style.color='blue';
    }
    fun1()

}


// headingChange(heading1,heading2);

function friedRice(){
    const bucket=['rice',"vegetable","salt","tomato"];
  return  new Promise((resolve,reject)=>{
        if(bucket.includes("rice")&&bucket.includes("salt")&&bucket.includes("vegetable")){
            resolve("fried rice");
        }
        else{
            reject(new Error("promise rejected"));
        }

    })
}
friedRice().then((data)=>{
    data+="ban gya"
    return data;
}).
then((data)=>{
    console.log(data)
    data+=" kha lo";
    return data;
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

 const name1= Promise.resolve("nagesh");
 name1.then((data)=>{
    console.log(data)
 })
