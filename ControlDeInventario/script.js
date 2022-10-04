
class Inventory{
    constructor() {
        this.list = new Array();
    }

    listar() {
        return this.list;
    }

    listInvert() {
        for(let i=0;i<=(this.list.length-1)/2; i++) {
            let aux = this.list[i];
            this.list[i] = this.list[(this.list.length-1)-i];
            this.list[(this.list.length-1)-i] = aux;
        }
        return this.list;
    }

    add(producto) {
        this.list.push(producto);
    }
    
    del(posicion) {
        let pos = posicion;
        for(let i=0;i<this.list.length;i++) {
            let producto = this.list[i];
            if(this.list.length == 1) {
                this.list = [];
            } else {
                if(pos != i) {
                    this.list[i-1]=producto;
                }
            }
        }
        //Elimina la ultima posicion del vector
        this.list.length = this.list.length - 1;
    }

    find(codigo) {
        let code = codigo;
        for(let i = 0; i < this.list.length; i++) {
            let product = this.list[i];
            if(code == product.code) {
                return product;
            } else {
                return null;
            }
        }
    }
    
    edit(codigo) {
        let code = codigo;
        for(let i=0;i<this.list.length;i++) {
            let product = this.list[i];
            if(code == product.code) {
                return product;
            } else {
                return null;
            }
        }
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
        return `Codigo: ${this.code} Nombre: ${this.name} Cantidad: ${this.amount} Costo: ${this.cost}`
    }   
}
