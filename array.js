// typeof
const number = 233;
const string ="hello world!"
const boolean = true;
const object ={name: "object", type:"object"};
const array =[50,30,49,67,674,23];
// const funcTion = function functionName(paramiter){
//     return paramiter
// }
// functionName(20)
console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof object);
console.log(typeof array);
// array typeof cheack korte hoy Array.isArray(varName)
console.log(Array.isArray(array));

const arrayIs = [10,20,30,40,50,60,70,80,90,100];
// kono element array moddhe ase kina jante includes use kora hoy. includes true or flase ans dey.
console.log (arrayIs.includes(15));
console.log (arrayIs.includes(20,4));
console.log (arrayIs.includes(20,1));

// kono element array te ase kina jante indexOf use kora hoy khub kon khtere
if(arrayIs.indexOf(65) !== -1){
    console.log("here I am.🥱")
}
else{
    console.log("nei nei nei ami nei")
}
const divisibleFiveArray = [5 , 10, 15, 20, 25, 30, 25, 40, 45, 50, 55, 60, 65,70, 75, 80,85, 90, 95,100];
console.log(divisibleFiveArray.includes(22));

console.log(divisibleFiveArray.indexOf(100));
if (divisibleFiveArray.indexOf(30) !== -1){
    console.log("Present")
}
else{
    console.log("absent")
}

const concatArray = arrayIs.concat(divisibleFiveArray)
console.log(concatArray)