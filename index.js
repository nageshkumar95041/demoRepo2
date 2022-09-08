// let name1="Nageshkumar";
// console.log(name1.length);
// console.log(name1[1]);
// console.log(name1.slice(0,6))

// let age=15+"";
let age=Number(15)
let name="Nagesh kumar";

console.log(typeof age)
console.log(typeof name);
let a=null;
console.log(typeof a);
let b;
console.log(b)

//ternary operatoer;
const age1=19;
const c=age1>=18 ?"coffee":"milk";
console.log(c);

let fruits=["mango","banana",12,"apple"];
fruits.push("cocunut");
console.log(fruits);
fruits.unshift("carrot");
console.log(fruits)
let x=fruits.shift();
console.log(x);
console.log(fruits)

let arr=["nagesh","raj","sadaf"];
// let arr2=arr;
// console.log(arr);
// console.log(arr2);


// let arr3=arr.slice(0);
let arr4=["jai"]
// arr3=[...arr].concat(arr4);
arr3=[...arr].concat(["rahul","nagesh"]);
arr.push("nishikant");
console.log(arr);
console.log(arr3)
const arr6=["rahul","mohan"];
arr6.push("surya");

console.log(arr6);
let arr7=["hi","how ","are","you"];
arr9=[];
for(let greet of arr7){
    console.log(greet);
    arr9.push(greet);
}
console.log(arr9)

//for in loop;
for(let index in fruits){
    console.log(fruits[index]);
}

//array destructring;

let array=["val1","value2","value3"];
let array2=array.slice(1,3);
console.log(array2);
const [y,,m]=array;
console.log(y,m);

//object
let key="email"
let obj={
    name:"Nagesh",
    salary:"300000",
    "his hobbies":["cricket","gym","singing"]

}
obj[key]="nagesh@123"
console.log(obj);
console.log(obj.name)
console.log(obj["name"])
console.log(obj["his hobbies"])
console.log(obj);

// iterate object;
for(let key in obj){
    // console.log(obj.key)
    console.log(obj[key]);
}
console.log(Object.keys(obj));

const key1="objkey1";
const key2="objkey2";

const values1="objval1"
const values2="objval2"

const obj2={
  [key1]:values1,
  [key2]:values2
}
// obj2[key1]=values1;
// obj2[key2]=values2;
console.log(obj2);
// let ar=[..."abc"]
let ar={..."abc"};
console.log(ar);








