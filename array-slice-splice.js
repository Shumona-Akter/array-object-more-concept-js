// array slice() using delee element and can not change main array

const array = ["pushi", "khushi", "juchi", "luchi", "vushi", "nuchi", "duchi"];
const arraySlice = array.slice(2, 4);
console.log(arraySlice);
console.log(array)

// array splice() using delete and insert element and its change main array
const arraySplice = array.splice(2,2);
console.log(arraySplice);
console.log(array)