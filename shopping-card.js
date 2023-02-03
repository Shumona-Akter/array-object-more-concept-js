const shoppingCart =[
    {weedingSari: "jamdani", price : 15000, Quantity: 1},
    {shooes: "Apex", price: 2000, Quantity: 1},
    {churi:"bala", price: 20000, Quantity:1},
    {mala:"Har", price:100000, Quantity:1},
    {dul:"dul", price:20000, Quantity:1},
    {other:"others", price:5000, Quantity:1},
    {eye:"mashkar, eyliner, makeup, etc", price:10000, Quantity:1},
    {sari:"half-silk", color:"yellow", price:2000, Quantity: 10},
    {churiHaldi:"reshmi", color:"red , yello", price: 50, Quantity:10},
    {weedingDecoretion:"decoration", price: 50000, Quantity:1},
    {weedingFood:"Food", price: 150000, Quantity:1}
];
function myShopping(shoppingItems){
    let totalCost = 0;
    for(let i = 0; i < shoppingItems.length; i++){
        const item = shoppingItems[i];
        const totalPriceOuantity = item.price  * item.Quantity
        totalCost = totalCost + totalPriceOuantity
    }
    return totalCost
}

const myBuget = myShopping(shoppingCart);
console.log(myBuget)

