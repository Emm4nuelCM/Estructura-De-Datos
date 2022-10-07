
class Inventory{
    constructor() {
        this.list = [];
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
        if(this.list.length == 0) {
            this.list.push(producto);
        } else {
        for(let i=0;i<this.list.length;i++) {
            if(producto.code < this.list[i].code) {
                this.list.length = this.list.length+1;
                for(let j=this.list.length;j>i;j--) {
                    this.list[j-1] = this.list[j-2];
                }
                this.list[i] = producto;
                return true;
            }else if(i==this.list.length-1) {
                this.list.push(producto);
                return true;
            }
        }
    }
}
    
    del(codigo) {
        for(let i=0;i<this.list.length;i++) {
            if(codigo == this.list[i].code) {
                if(this.list.length == 1) {
                    this.list = [];
                    return true;
                } else {
                    for(let j=i;j<this.list.length;j++) {
                        this.list[j]=this.list[j+1];
                    }
                    this.list.length = this.list.length - 1;
                    return true;
                }
            }
        }
    }

    find(codigo) {
        for(let i = 0; i < this.list.length; i++) {
            if(codigo == this.list[i].code) {
                return this.list[i];
            }
        }
        return null;
    }
    
    edit(codigo) {
        for(let i=0;i<this.list.length;i++) {
            let product = this.list[i];
            if(codigo == product.code) {
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
