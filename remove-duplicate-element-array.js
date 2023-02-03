const divisilebolTen = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const divisilebolFive = [5, 10, 15, 20, 25, 30, 25, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
const divisibleFifteen = [15, 30, 45, 60, 75, 90];

const arrayConcat = divisilebolTen.concat(divisilebolFive, divisibleFifteen);
// console.log(arrayConcat);

function removeDuplicateNumber(numbers){
    let newArray = [0];
    for(let i = 0;  i < numbers.length; i++){
        const number = numbers[i];
        if(newArray.includes(number) === false){
            newArray.push(number)
        }
    }

    return newArray

}
// "alu", "piyaj", "rosun", "ada", "begun", "potol", "kodu", " alu", "puishak", 
// " tomato", "rosun", "jira", "ada", "kalojira", "begun", "holud", "potol", "puishak", 
// "kochur loti", "palongshak", "morich", "jhinga", "holud", "jal", "potol", "palonshak",
// "kichmich"

const array = removeDuplicateNumber(arrayConcat);
console.log(array);

const mashkabariList = ["jannat", "khusi","jannat", "khusi","jannat", "khusi","jannat", "khusi","jannat", "khusi",];

function removeDoubleElement(elements){
    let uniqElement = [];
    for(let i = 0; i < elements.length; i++){
        const element = elements[i];
        if(uniqElement.includes(element) === false){
            uniqElement.push(element);
        }
    }
    return uniqElement
};
const arrayOfIndex = removeDoubleElement(mashkabariList);
console.log(arrayOfIndex);

const evenOdd = [5, 10, 15, 20, 25, 30, 25, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

function  evenNumber(numbers){
    let evenArray = [];
    for(let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if(number % 2 === 0){
            evenArray.push(number)
        }
    }
    return evenArray
}

const even = evenNumber(evenOdd);
console.log(even)


