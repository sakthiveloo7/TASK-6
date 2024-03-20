// write a class to calculate the Uber price.
class uberPrice
{
    constructor(
        basePrice, 
        costPerKiloMeters,
        costPerMinute
        ) 
        {
        this.basePrice = basePrice;
        this.costPerKiloMeters = costPerKiloMeters;
        this.costPerMinute = costPerMinute;
        }

        calculateAmount(distance, time)
        {
            let amount = this.basePrice + (distance * this.costPerKiloMeters) + (time * this.costPerMinute);
            return amount
        }
}
/*
basePrice = 30 Rs
costPerKiloMeters = 12 Rs
costPerMinute = 3 Rs
*/
const calculate = new uberPrice(30, 12,3)
let distance = 20 // 10 Kilometers
let time = 40 // 30 minutes

let totalAmount = calculate.calculateAmount(distance, time)
console.log("Total Amount is :",totalAmount,"Rs");