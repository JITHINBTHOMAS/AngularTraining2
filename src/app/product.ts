export class product{
    productId: string
    description: string
    brand: string
    qty: number
    price: number


    constructor(producctId: string,description: string,brand: string,qty: number,price: number){
        this.productId = producctId
        this.description = description
        this.brand = brand
        this.qty = qty
        this.price = price
    }

}