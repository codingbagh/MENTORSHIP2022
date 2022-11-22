// // // // //Variables

// // // // // let number = 1;

// // // // // number = 2;
// // // // // console.log(number)

// // // // //Primitives/Basic

// // // // //Number
// // // // //Boolean
// // // // //Null
// // // // //Undefined
// // // // //String

// // // // // let numbers = 123.8;
// // // // // let bool = true;
// // // // // let nullify = "";
// // // // // let goat;
// // // // // let Sentence = "123.8"

// // // // // console.log( typeof bool)

// // // // //function 

// // // // // declaration
// // // // // Expression
// // // // // Arrow Function

// // // // // const Go = ()=>{
// // // // //     console.log("I'm going")
// // // // // }

// // // // // Go()

// // // // const Para = (a,b)=>{
// // // // console.log(a+b)
// // // // }

// // // // Para(1,3)


// // // //Create a program to solve area of a circle
// // // // Area = 3.14*r*r

// // // // // const Area = (r)=>{
// // // // //     const pie = 3.14;
// // // // //     let Answer = pie*r*r;
// // // // //     console.log(Answer)
// // // // // }

// // // // // Area(90)


// // // // function Area(r){
// // // // const pie = 3.14;
// // // // let Answer = pie *r*r;
// // // // console.log(Answer)
// // // // }

// // // // Area(34)


// // // // const Numbers = [1,7,9]

// // // // Numbers[0] = Numbers[0] + Numbers[2]

// // // // Numbers[2] = Numbers[0] + Numbers[1]

// // // // Numbers[0] = 9

// // // // console.log(Numbers)


// // // //Push || Pop

// // // // const Numbers = []

// // // // Numbers.push(10)
// // // // Numbers.push(8)
// // // // Numbers.pop()
// // // // Numbers.push(6)
// // // // Numbers[0]= Numbers[1]+Numbers[1]


// // // // console.log(Numbers)


// // // //Shift || Unshift

// // // // const Numbers = [];

// // // // Numbers.unshift(8)
// // // // Numbers.push(6)
// // // // Numbers.unshift(8)
// // // // Numbers.pop()
// // // // Numbers.push(6)
// // // // Numbers.shift()
// // // // Numbers[0] = Numbers[0] + Numbers[1]


// // // // console.log(Numbers.indexOf(6))


// // // //Objects



// // // const Kromo = {
// // //     height:"6ft",
// // //     indexnumber:"ueb35088"
// // // }

// // // const Kelvin = {
// // //     height:"9ft",
// // //     indexnumber:"ueb350888"
// // // }


// // // Kelvin.age = "98yrs"
// // // Kromo.gpa = "1.0"


// // // const comp300= [Kromo,Kelvin]



// // // console.log(comp300[1])


// // // String literals

// // // const name = "Kelvin"
// // // const age = "45"

// // // console.log(`I am ${age}yrs`)


// // // const Numbers = []

// // // Numbers.unshift(2)
// // // Numbers.push(3)
// // // Numbers[2]= Numbers[0]+Numbers[1]
// // // Numbers.shift()
// // // Numbers.pop()
// // // Numbers.push(6)

// // // console.log(Numbers)

// // //Loops
// // //for
// // //while
// // //do while
// // //map
// // //filter

// // // const numbers = [1,4,5]
// // // const Answer =[]

// // // // console.log(numbers[0])
// // // // console.log(numbers[1])
// // // // console.log(numbers[2])

// // // [3,6,7]

// // // for(let i=0;i<4;i++)
// // // {

// // //     console.log(numbers[i]+2)

// // // }

// // // const Numbers = [1,4,6,8,8,8,9,5]





// // // for(let i=0;i<Numbers.length;i++)
// // // {

// // // console.log(Numbers[i])


// // // }


// // // const Numbers = [1,4,6,8,8,8,9,5]
// // // const Answer = []

// // // let i = 0;
// // // // memory === i === 3
// // // // hey
// // // // hey
// // // // hey

// // // while(i<Numbers.length)
// // // {
// // // Answer.push(Numbers[i]+2)
// // // i+=1;

// // // }

// // // console.log(Answer)




// // //Do while

// // // let i = 10;

// // // do{
// // //     console.log(`do ${i}`);
// // //     i-=1
// // // }while(i>0)

// // // i=10

// // // while(i>0){
// // //     console.log(`while ${i}`);
// // //     i-=1
// // // }


// // //map

// // // const numbers = [1,3,4]

// // // const newNumbers = numbers.map((number)=>number*4)

// // // const newN = []

// // // for(let i =0;i<numbers.length;i++){
// // //     numbers[i]===3 && newN.push( numbers[i])
// // // }



// // // console.log(newN)


// // //filter




// // // const numbers = [1,2,3,4,6]


// // // const Filter = numbers.filter((number)=> number-2===0 || number-2<3)


// // // console.log(Filter)


// // const numbers = [4,5,6,8,10,7]

// // //Find the odd numbers in the above array using filter


// // // const oddNumbers = numbers.filter((number)=>number%2===1 && number)


// // // console.log(oddNumbers)




// // //Equality Comparison
// // //loose equality ==
// // //strict equality===


// // // let password = null;
// // // let dbPassword = undefined;


// // // console.log(password===dbPassword)

// // //Conditional Statement

// // //if
// // //if_else
// // //else if


// // //>=
// // //===

// // // age < 17 ==> you are too young to vote
// // // age === 17 please logout and come back next year
// // // age === 18 hurray you are 18
// // // age > 18 proceed to vote 

// // // if(age < 17 ){
// // //     console.log("you are too young to vote")
// // // }else if(age === 17){
// // //     console.log("please logout and come back nect year")
// // // }else if(age === 18){
// // //     console.log("hurray you are 18")
// // // }else{
// // //     console.log("proceed to vote ")
// // // }

// // //Tenary Operator

// // let age;
// // age = 18


// // // age < 17 ==> you are too young to vote
// // // age === 17 please logout and come back next year
// // // age === 18 hurray you are 18
// // // age > 18 proceed to vote 

// // // age<17?console.log("You are too young to vote"):age==17?console.log("please logout and come back next year"):age === 18?console.log("18 hurray you are 18"):console.log("proceed to vote")

// // //Appersand

// // // age < 17 && console.log("you are too young to vote") 

// // // age === 17 && console.log("please logout and come back next year") 

// // // age === 18 &&  console.log("hurray you are 18") 

// // // age > 18  &&   console.log("proceed to vote") 



// // // try{
// // //     console.log("ama")
// // // }catch(err){
   
// // //     console.log("there's was an error")
// // // }finally{
// // //     console.log("hey finally")
// // // }



// // // console.log("kofi")


// // // console.log("sign in")

// // // setTimeout(()=>console.log("data"),2000)

// // // console.log("Entered")
// // // console.log("display")

// // // setTimeout(()=>console.log("set"),4000)

// // //call backs

// // // const ama = (num,num1,callBack)=>{
// // //     console.log(num)
// // //      console.log(num1)
// // //      setTimeout(()=>console.log("data"),2000)
// // //      callBack(num,num1);
// // // }


// // // const ama1 = (e)=>console.log(e)



// // // ama("Signin","entered",ama1)


// // function greet(name, callback) {
// //     setTimeout(()=>console.log('Hi' + ' ' + name),4000) 
// //     callback()
// // }



// // // callback function
// // function callMe() {
// //     console.log('I am callback function');
// // }

// // // passing function as an argument
// // greet('Peter', callMe);




// // // const ama =async()=>{
// // //   await  setTimeout(()=>console.log('Hi' ),4000);
// // //   console.log('I am callback function')

// // // }

// // // setInterval(()=> console.log("HEY iNTERVAL"),2000)
// // // setTimeout(()=> console.log("HEY tIME"),2000)


// // // ama()


// const hey = document.getElementById("hey")
// const num1 = document.getElementById("num1")
// const num2 = document.getElementById("num2")
// const btn = document.querySelector('#btn')

// const add = ()=>{

// let Answer = Number(num1.value) + Number(num2.value)
// hey.textContent=Answer
// }

// btn.addEventListener('click',add)
// // btn.addEventListener('mouseenter',add)







// let name = prompt()

// //getElementById()

// // const welElement = document.getElementById("welcome")
// // const welElement = document.querySelector("#welcome")

// // const welElement = document.getElementsByClassName("welcome")

// const welElement = document.getElementsByTagName("h1")
// console.log(welElement)

//Manipulate element text


// const list =  document.getElementById("list")

// const li = document.createElement("li")

// // li.setAttribute("id","list")
// li.classList.add("list")
// li.classList.add("list2")
// // li.classList.remove("list")

// li.textContent = "apple"


// console.log(li)

// list.appendChild(li)


const btn = document.getElementById("add")

const input = document.querySelector("#input")
const ul = document.querySelector("#list")

const add = ()=>{
    const li = document.createElement("a")
    li.setAttribute("href",input.value.slice(0,3))
    // let valueInput = input.value
    li.textContent = input.value
    ul.appendChild(li)

    input.value=""
}



btn.addEventListener("click",add)