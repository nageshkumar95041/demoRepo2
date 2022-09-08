// this keyword;

// this is a object which point that object 
// jo  us function ko call kr rha hai.

const person={
    name1:"Nagesh",
    age:21,
    fun:function(){
        console.log(this)
        console.log(` my name is ${this.name1} and my age is ${this.age}`)
        
    }

}
person.fun()

// call

// kisi objcet ke method ko ya  normal function ko kisi dusre object me user karne ke leye
// call ka user karte hain.

//eg.
  function fun1(a,b){
    console.log(this.fname,this.age)
    console.log(a+b)
  }
const user1={
    fname:"nagesh",
    age:21,
    about:function(){
    console.log(this.fname,this.age)
    }
}
const user2={
    fname:"nishikant",
    age:20,
    
}
fun1.call(user2,2,3) // fun1 ko user2 object me paste kr dega.
user1.about.call(user2)// about method ko user2 me paste kr dega.

// apply same as call but in case of call we pass argument like
// fun1.call(user2,2,3) but in case of apply we pass array of argument
// like fun1.call(user2,[2,3])

//bind:--------------

// same as bind but it return function

const newfun=fun1.bind(user2,2,3);
newfun()

const user3={name:"nisha",
           fun:()=>{
            console.log(this)
           }
}
user3.fun()

// function returning object;

function fun3(key1,value){
    const obj={};
    obj[key1]=value;
    return obj;
}

const obj1=fun3("email","Nagesh@123")
console.log(fun3("name","nagesh"))
console.log(obj1)



// proto;

// every object has an proto if any properties or method are 
// are not available in that object it inherit it's from its proto
// if available;

const obj3= {
    name:"Nagesh kumar",
    email:"nagesh@123"
}

const obj4=Object.create(obj3) // it set the obj3 as proto of obj4;
obj4.salary=43434343,
console.log(obj4)
console.log(obj4.__proto__)

// prototype

function hello(){
    console.log("hi good morning")
}
console.log(hello.prototype)

// set methods to prototype of function

function createUser(fname,email,salary){
   
  const user= Object.create(createUser.prototype)
    user.fname=fname;
    user.email=email;
    user.salary=salary;
    createUser.prototype.about=function(){
        console.log(`my name is ${this.fname} and my email is ${this.email}`)
    }
    return user

}
let nagesh=createUser("nagesh","nagesh@123",43434);

console.log(nagesh);
nagesh.about()

// new keyword;---------------------------------------------

//1. this:{} this name se ek empty object bna dega;
// 2.and us object ko return bhi kr dega
// 3. this name ke object ke proto ko  function ke prototype 
//ke equal set bhi kr dega;


//eg.
 function createUser2(fname,email,salary){
   
   
      this.fname=fname;
      this.email=email;
      this.salary=salary;
      
      
    }
    createUser2.prototype.about=function(){
        return `my name is ${this.fname} and my email is ${this.email}`
    }

//   const userr = new createUser2("nishikant","nishikant@123",2424432)
//   console.log(userr.about)
 const dd= new createUser2("nishikant","nishikant@123",43434);
 console.log(dd.about())
  
// class 
// class is used to create constructor

class animal {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat() {
        console.log(`${this.name} and his age is ${this.age} and he is eating`)
    }
}

const dog= new animal('puppy',11);
console.log(dog)
dog.eat();

// inheritence

class man extends animal{
    constructor(name,age,salary){
      super(name,age);
    this.salary=salary;
  }
}
const rahul=new man("rahul",21,5999989);
console.log(rahul)
rahul.eat()


