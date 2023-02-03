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
console.log(myPhone)