//arthematic operaters

let x=10,y=3;
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x**y)
console.log(x%y)

//assignment operaters

let z=5;
z+=3;
console.log(z)
z*=2;
console.log(z)
z-=4;
console.log(z)
z/=2;
console.log(z)
z%=2;
console.log(z)

//comparison operaters


let a=10,b="10";
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a>b)
console.log(a<b)
console.log(a<=b)
console.log(a>=b)

//logical operaters

let age=20;
console.log(age>=20 && age<=40)
console.log(age<20 || age>20)
console.log(!(age<18))

//string operaters

let firstName="raji"
let lastName="laxmi"
let fullName=firstName+" "+lastName;
console.log(fullName)

let corretName=`hello ${firstName} ${lastName},welcome to devastra`
console.log(corretName)

//ternary operaters
let myAge=19;
if(myAge>=18){
    console.log("eligible to vote")

    
}
else{
    console.log("you cannot vote")
}
let result=myAge>=18 ? "eligible to vote" :"you cannot vote"
console.log(result)

//increament and decreament operaters
let count=5;
console.log(count++)
console.log(count)
console.log(++count)

//typeof operaters
console.log(typeof count)
console.log(typeof "raji")
console.log(typeof 18)


