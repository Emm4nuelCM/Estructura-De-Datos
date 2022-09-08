class Inventory{
    constructor() {
        this.list = new Array();
    }
}

class Product{
    constructor(code, name, amount, cost) {
        this.code = code;
        this.name = name;
        this.amount = amount;
        this.cost = cost;
    }

    info() {
        return `${this.code} ${this.name} ${this.amount} ${this.cost}`
    }
}
let test = new Product(2020, "Agua", 2, 10);

console.log(test.info());


addProduct(Product) {
    this.list.push(Product);
}

/*
deleteCode(code) {

}

updateCode(code) {

}

*/
