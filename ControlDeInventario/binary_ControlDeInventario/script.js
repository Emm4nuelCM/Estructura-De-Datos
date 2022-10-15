
class Inventory{
    constructor() {
        this.list = [];
    }

    listar() {
        return this.list;
    }

    listInvert() {
        let listInvert = [];

        for (let i = this.list.length - 1; i >= 0; i--) {
            listInvert.push(this.list[i]);
        }
        return listInvert;
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
        let l = 0;
        let r = this.list.length-1;
        while(l<=r){
            let m = Math.floor((l+r)/2);
            if(codigo == this.list[m].code) {
                return this.list[m];
            }
            if(codigo > this.list[m].code) {
                l=m+1;
            } else if(codigo < this.list[m].code) {
                r=m-1;
            }
        }
        return null;

    }
    
    edit(codigo) {
         return this.find(codigo);
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