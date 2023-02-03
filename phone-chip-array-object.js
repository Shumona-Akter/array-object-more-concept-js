const phones =[
    {name:"samsam", ram: "4gb", camera: "10 mpx", price: 30000},
    {name:"xaomi", ram: "8gb", camera: "10 mpx", price: 43000},
    {name:"HTC", ram: "16gb", camera: "10 mpx", price: 63000},
    {name:"Oppo", ram: "16gb", camera: "10 mpx", price: 33000},
    {name:"Vivo", ram: "32gb", camera: "10 mpx", price: 20000},
    {name:"Walton", ram: "62gb", camera: "10 mpx", price: 10000},
    {name:"iPhone", ram: "16gb", camera: "10 mpx", price: 100000}
]


function phoneItem(phones){
    let phonePrice = phones[0];
    for(let i = 0; i < phones.length; i++){
        const item = phones[i];
        if(item.price < phonePrice.price){
            phonePrice = item
        }

    }
    return phonePrice
}
const myPhone = phoneItem(phones);
console.log(myPhone);


const books = [
    {name : "comminication Hacks", pages: 300, price : 200, writer :"Ayman Sadik" },
    {name : "students Hacks", pages: 400, price : 200, writer :"Siddikur" },
    {name : "enlish speaking", pages: 350, price : 200, writer :"Munjerin" },
    {name : "bela furabar age", pages: 200, price : 500, writer :"Arif ajad" },
]

function allBook(books){
    let favoriteBook = books[0]
    for(let i = 0; i < books.length ; i++){
        const book = books[i]
        if(book.writer === "Arif ajad"){
            favoriteBook = book;
        }

    }
    return favoriteBook
}

const myBook = allBook(books);
console.log(myBook);

