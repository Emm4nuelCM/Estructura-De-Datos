
class Nodo{
    constructor(producto){
        this.producto= producto;
        this.next=null;
    }
}

class Inventory{
    constructor() {
        this.listPrimero = null;
    }

    listar() {
        let list = [];
        let int = this.listPrimero;
        while (int!=null) {
            list.push(int.producto);
            int=int.next;
        }
        return list;
    }

    listInvert() {
        let listInvert = [];
        let list = this.listar();
        for (let i = list.length - 1; i >= 0; i--) {
            listInvert.push(list[i]);
        }
        return listInvert;
    }

    add(nuevo) {
        if (this.listPrimero==null)
        this.listPrimero=nuevo;
      else{
        let temp=this.listPrimero;
        while (temp.next!=null)
          temp=temp.next;
          temp.next=nuevo;
        }
    }
    
    del(codigo) {
        let nodo = this.listPrimero;
        let temp = null;
        if(codigo == nodo.producto.code) {
            this.listPrimero = nodo.next;
            return true;
        }
        while(nodo!=null) {
            if(codigo!=nodo.producto.code) {
                temp = nodo;
                nodo = nodo.next;
            } else if(codigo == nodo.producto.code) {
                temp.next=nodo.next;
                return true;
            }
        }
    }

    /*find(codigo) {
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
    }*/
    
    /*edit(codigo) {
         return this.find(codigo);
    }*/
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