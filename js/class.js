"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const totalPrice = this.price + taxAmount;
        return totalPrice;
    }
}
const toyota = new Car('toyota', 10000);
const AllTotal = toyota.getTotalPrice(25);
console.log(AllTotal);
