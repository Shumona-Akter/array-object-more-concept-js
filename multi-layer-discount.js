function totalDay(day){
    const firstTenTicket = 150;
    const elavenToTweenty = 100;
    const tweentyToUnlimited = 50;
    
    if(day <= 10){
        const tenTicketPrice = firstTenTicket * day;
        return tenTicketPrice

    }
    else if(day <= 20){
        const first10Ticket = firstTenTicket * 10;
        const restQuantity = day - 10;
        const elavenToTweentyTicketPrice = restQuantity * elavenToTweenty;
        const ticketPrice = elavenToTweentyTicketPrice + first10Ticket;
        return ticketPrice
    }
    else{
        const first10Ticket = firstTenTicket * 10;
        const second10Ticket = elavenToTweenty * 10;
        const restQuantity = day - 20;
        const tweentyUnlimitedTicketPrice = restQuantity * tweentyToUnlimited;
        const ticketPrice = first10Ticket + second10Ticket + tweentyUnlimitedTicketPrice;
        return ticketPrice;
    }
}


const price = totalDay(50);
console.log(price)
let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 

}
console.log(sum)