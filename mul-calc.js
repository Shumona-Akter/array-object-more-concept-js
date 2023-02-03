/*
1.table = 5 feet;
2. chair = 2 feet ;
3. bed =10 feet;
 */
// function woodCalc(tableQuantity, chairQuantity, bedQuantity){
//     const tableWood = 5;
//     const chairWood = 2;
//     const bedWood = 10;

//     const totalTableWood = tableWood * tableQuantity;
//     const totalChairWood = chairWood * chairQuantity;
//     const totalBedWood = bedWood * bedQuantity;

//     const neddTotalWood = totalTableWood + totalChairWood + totalBedWood;
//     return neddTotalWood;
// }

// const totalWood = woodCalc(2, 8, 2);
// console.log(totalWood, "feet");


function woodCalc(tableQuantity, chairQuantity, bedQuantity){
    const tableWood = 5;
    const chairWood = 2;
    const bedWood = 10;
    const woodFeetPrice = 200;
    const leborPrice1feet = 500;
    const totalTableWood = tableWood * tableQuantity;
    const totalChairWood = chairWood * chairQuantity;
    const totalBedWood = bedWood * bedQuantity;

    const neddTotalWood = totalTableWood + totalChairWood + totalBedWood;
    const totalPrice = neddTotalWood * woodFeetPrice;
    const totalLebourPrice = neddTotalWood * leborPrice1feet;
    const totalCost = totalPrice + totalLebourPrice
    return totalCost
}

const totalWood = woodCalc(1, 2, 1);
console.log(totalWood, "Taka");