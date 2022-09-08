const obj={
    name:"Nagesh",
    age:21
    ,salary:2324344
}
const {name:name1,...rest}=obj;
console.log(name1);

console.log(rest)

let obj2=[{user1:"Nagesh",user1Age:19},
    {user2:"Nagesh",user2Age:19},
   { user3:"Nagesh",user3Age:19},
]

for(let user of obj2){
    console.log(user);
}

const [{user1},,{user3Age}]=obj2;
console.log(user1,user3Age);

// function sing(){
//     console.log("happy birthday...")
// }

// sing();

let sing=function(){
    console.log("happy birthday");
}

sing()


let fun=()=>{
    const greet=()=>{
        console.log("hi good afternoon");
    }
    console.log("hello nagesh")
    greet()

}
fun()
// var name3="Nagesh"
{
    var name3="Nagesh"
// console.log(name3)

}
console.log(name3);

let fun2=(...c)=>{
    
    var ans=0;
    for(let elem of c){
         ans =ans+elem;
    //   console.log(ans)
    }
    console.log(ans)
}

fun2(1,2,3,4,5,6,7,2)

const obj5={
    name:"nagesh kumar",
    age:21
}

function printDetail({name,age}){
   console.log(name)
   console.log(age)

}
printDetail(obj5);

//function returning function;

function fun3(){
    return function print(){
        console.log("hello world")
    }
}
let res=fun3();
console.log(res);
res();

const number=[1,2,3,4];
number.forEach((number,index)=>{
    console.log(`number is ${number*2} and index is ${index}`)
})

const newNum=number.map((num)=>{
    return num*num;
})
console.log(newNum)

const user3=[
    {
    name:"nagesh",age:21,salary:343434,
},
    {
    name:"nishikant",age:21,salary:343434,
},
    {
    name:"rahul",age:21,salary:343434,
},
]
const userName=user3.map((user)=>{
    return user.name;
})
console.log(userName);

let array4=[1,3,4,5,67,90,46,46];
const newArray4=array4.filter((num)=>{
    return num%2===0;
})
console.log(newArray4);

const array7=[
    {ProductId:1,ProductName:"mobile",price:12000},
    {ProductId:2,ProductName:"laptop",price:49000},
    {ProductId:3,ProductName:"tv",price:18000},
]
const totalAmount=array7.reduce((totalPrice,currentItem)=>{
        return totalPrice + currentItem.price;
},0)
    console.log(totalAmount);

//sort;
// const arry=[12,4,5,65,7];
//   arry.sort((a,b)=>{
//     return a-b;
//   })

  //decending order sorting;
  const arry=[12,4,5,65,7];
  arry.sort((a,b)=>{
    return b-a;
  })

  console.log(arry)

  const array8=[
    {ProductId:1,ProductName:"mobile",price:12000},
    {ProductId:2,ProductName:"laptop",price:49000},
    {ProductId:3,ProductName:"camera",price:8000},
    {ProductId:4,ProductName:"cooker",price:1000},
    {ProductId:5,ProductName:"charger",price:600},
]

// lowTohigh sorting;
const newarray8=array8.slice(0).sort((a,b)=>{
    return a.price-b.price;
})
console.log(newarray8)

array8.sort()

//find;
const ans1=array8.find((product)=>{
    return  product.ProductId===3;
})
console.log(ans1);

const objs={
  name:"nagesh",
  fun: function fun(a,b){
     sums=a+b;
     console.log(a+b);
    return a+b;
  }
}
const sum=objs.fun;
const ans3=sum(2,3)
// console.log(ans3);


// every method
//some method

//splice method

// it returns deleted items;

//  splice(index,noOf elem for delete,insertElem)
//delete element from array;

const arrss=[3,4,5,6,"nagesh"];
anss=arrss.splice(4,1,"inserted item");
console.log(anss);


// iterable
//  jispe ham for of loop lga sakte hain wo iterale hota hai. 
//  for Ex : String,array,sets.

// array like object
//   jiske pass length property ho;
//   and jisko ham index se acces kar sakte hain.

// sets

// const nums= new Set([1,2,2,2,4]);
// console.log(nums);

const arr33=[1,2,2,3,3,4,5,6,6,9];
const newArr33= new Set(arr33);
console.log(newArr33)
const uniq=[...newArr33];
console.log(uniq.length)

// map

// key value pair store karta hai

// diff bw object and map

// object me key only string or symbol ho sakta hai but map me 
// key ka data type  kuch  bhi ho sakta hai like array,number,object .


let person= new Map();
person.set("name","Nagesh");
person.set(1,"one");

console.log(person);
console.log( person.get(1))

// iterate map

for(let key of person.keys()){
    console.log( typeof key)
}

