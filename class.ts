class Car{

    model:string;
    price:number;
    constructor(model:string,price:number){
        this.model=model;
        this.price=price;
    }
    getTotalPrice(tax:number):number{
        const taxAmount=this.price*tax/100;
        const totalPrice=this.price+taxAmount;
        return totalPrice;
    }
}

const toyota=new Car('toyota',10000);
const AllTotal:number= toyota.getTotalPrice(25);
console.log(AllTotal);